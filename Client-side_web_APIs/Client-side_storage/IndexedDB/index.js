// Create needed constants
const list = document.querySelector('ul');
const titleInput = document.querySelector('#title');
const bodyInput = document.querySelector('#body');
const form = document.querySelector('form');
const submitBtn = document.querySelector('form button');

// Create an instance of a db object for us to store the open database in
let db;

// データベースの中に幾つかのオブジェクト(テーブル)を作成する仕組み？

// Open our database; it is created if it doesn't already exist
// (see the upgradeneeded handler below)
const openRequest = window.indexedDB.open('notes_db', 1);

// データベース操作は時間がかかるから、非同期で処理され、処理が終わってから通知される。

// The error event handler will run if the system comes back saying that the request failed.
// error handler signifies that the database didn't open successfully
openRequest.addEventListener('error', () => console.error('Database failed to open'));

// The success event handler will run if the request returns successfully, meaning the database was successfully opened.
// success handler signifies that the database opened successfully
openRequest.addEventListener('success', () => {
    console.log('Database opened successfully');

    // if successfully opened, an object representing the opened database becomes available in the openRequest.result property

    // Store the opened database object in the db variable. This is used a lot below
    db = openRequest.result;

    // Run the displayData() function to display the notes already in the IDB
    displayData();
});


// upgradeneededイベントは、現在のバージョンよりも高いバージョン番号のデータベースを開こうとしたときに発生。 このイベントはキャンセルできず、バブルも発生しません。
// upgradeneededイベントハンドラー（必要な場合）がsuccessイベントハンドラーの前に実行されるため、これを個別に行う必要があります。つまり、これを行わないと、db値を使用できません。
// Set up the database tables if this has not already been done
openRequest.addEventListener('upgradeneeded', e => {

    // Grab a reference to the opened database
    db = e.target.result;

    // Create an objectStore to store our notes in (basically like a single table)
    // including a auto-incrementing key
    const objectStore = db.createObjectStore('notes_os', { keyPath: 'id', autoIncrement:true });

    // Define what data items the objectStore will contain
    // createIndex(indexName, keyPath)
        // indexName: The name of the index to create. Note that it is possible to create an index with an empty name.
        // The key path for the index to use. Note tha it is possible to create an index with an empty KeyPath, and also to pass in a sequence(array) as a Key Path.

    objectStore.createIndex('title', 'title', { unique: false });
    objectStore.createIndex('body', 'body', { unique: false });

    console.log('Database setup complete');
});

// Create a submit event handler so that when the form is submitted the addData() function is run
form.addEventListener('submit', addData);

// Define the addData() function
function addData(e) {
    // prevent default - we don't want the form to submit in the conventional way.　これをしないとページが更新され、エクスペリエンスが損なわれてしまう。
    e.preventDefault();
  
    // grab the values entered into the form fields and store them in an object ready for being inserted into the DB
    const newItem = { title: titleInput.value, body: bodyInput.value };
  
    // open a read/write db transaction, ready for adding the data
    // IDBDatabase.transaction（）メソッドを使用して、notes_osオブジェクトストアに対して読み取り/書き込みトランザクションを開きます。このトランザクションオブジェクトを使用すると、オブジェクトストアにアクセスできるため、オブジェクトストアに対して何かを実行できます。新しいレコードを追加します。
    const transaction = db.transaction(['notes_os'], 'readwrite');
  
    // call an object store that's already been added to the database
    // Access the object store using the IDBTransaction.objectStore() method, saving the result in the objectStore variable.
    const objectStore = transaction.objectStore('notes_os');
  
    // Make a request to add our newItem object to the object store
    // Add the new record to the database using IDBObjectStore.add(). This creates a request object, in the same fashion as we've seen before.
    const addRequest = objectStore.add(newItem);
  


    // ライフサイクルの重要なポイントでコードを実行するために、一連のイベントハンドラーをリクエストとトランザクションオブジェクトに追加します。リクエストが成功すると、次のメモを入力する準備ができたフォーム入力をクリアします。トランザクションが完了したら、displayData（）関数を再度実行して、ページ上のメモの表示を更新します。

     // addRequenst が成功したら、inputの値をリセット
    addRequest.addEventListener('success', () => {
      // Clear the form, ready for adding the next entry
      titleInput.value = '';
      bodyInput.value = '';
    });
  
    // トランザクションが完了したら、displayData()を実行し、ページを更新。
    // Report on the success of the transaction completing, when everything is done
    transaction.addEventListener('complete', () => {
      console.log('Transaction completed: database modification finished.');
  
      // update the display of data to show the newly added item, by running displayData() again.
      displayData();
    });

    // トランザクションがエラーの時にエラーメッセージ。
    transaction.addEventListener('error', () => console.log('Transaction not opened due to error'));
}

// Define the displayData() function
function displayData() {
    // Here we empty the contents of the list element each time the display is updated
    // If you didn't do this, you'd get duplicates listed each time a new note is added
    // まず、<ul>要素のコンテンツを空にしてから、更新されたコンテンツを入力します。これを行わなかった場合、更新のたびに重複コンテンツの膨大なリストが追加されることになります。
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
  
    // Open our object store and then get a cursor - which iterates through all the
    // different data items in the store
    // addData（）で行ったようにIDBDatabase.transaction（）とIDBTransaction.objectStore（）を使用してnotes_osオブジェクトストアへの参照を取得しますが、ここではそれらを1行にチェーンしています。
    const objectStore = db.transaction('notes_os').objectStore('notes_os');

    // IDBObjectStore.openCursor（）メソッドを使用してカーソルの要求を開くことです。これは、オブジェクトストア内のレコードを反復処理するために使用できる構造です。コードをより簡潔にするために、成功イベントハンドラーをこの行の最後にチェーンします。カーソルが正常に返されると、ハンドラーが実行されます
    // IDBObjectStoreインターフェイスのopenCursor（）メソッドは、IDBRequestオブジェクトを返し、別のスレッドで、新しいIDBCursorWithValueオブジェクトを返します。カーソルを使用してオブジェクトストアを反復処理するために使用されます。 追加操作が正常に完了したかどうかを判断するには、結果の成功イベントをリッスンします。
    objectStore.openCursor().addEventListener('success', e => {
        // We get a reference to the cursor itself
        const cursor = e.target.result;
    
        // If there is still another data item to iterate through, keep running this code
        // カーソルにデータストアのレコードが含まれているかどうかを確認
        if(cursor) {
            // DOMフラグメントを作成し、レコードのデータを入力して、ページ（<ul>要素内）に挿入します。また、クリックすると、次のセクションで説明するdeleteItem（）関数を実行して、そのメモを削除する削除ボタンも含まれています。


            // Create a list item, h3, and p to put each data item inside when displaying it
            // structure the HTML fragment, and append it inside the list
            const listItem = document.createElement('li');
            const h3 = document.createElement('h3');
            const para = document.createElement('p');
    
            listItem.appendChild(h3);
            listItem.appendChild(para);
            list.appendChild(listItem);
    
            // Put the data from the cursor inside the h3 and para
            h3.textContent = cursor.value.title;
            para.textContent = cursor.value.body;
    
            // Store the ID of the data item inside an attribute on the listItem, so we know
            // which item it corresponds to. This will be useful later when we want to delete items
            listItem.setAttribute('data-note-id', cursor.value.id);
    
            // Create a button and place it inside each listItem
            const deleteBtn = document.createElement('button');
            listItem.appendChild(deleteBtn);
            deleteBtn.textContent = 'Delete';
    
            // Set an event handler so that when the button is clicked, the deleteItem()
            // function is run
            deleteBtn.addEventListener('click', deleteItem);
    
            // Iterate to the next item in the cursor
            // IDBCursor.continue（）メソッドを使用してカーソルをデータストア内の次のレコードに進め、ifブロックのコンテンツを再度実行します。反復する別のレコードがある場合、これによりそのレコードがページに挿入され、continue（）が再度実行されます。
            cursor.continue();
        } else {
            // 反復するレコードがなくなると、カーソルは未定義を返すため、ifブロックの代わりにelseブロックが実行されます。このブロックは、メモが<ul>に挿入されたかどうかを確認します。挿入されていない場合は、メモが保存されていないことを示すメッセージを挿入します。

            // Again, if list item is empty, display a 'No notes stored' message
            if(!list.firstChild) {
            const listItem = document.createElement('li');
            listItem.textContent = 'No notes stored.'
            list.appendChild(listItem);
            }
            // if there are no more cursor items to iterate through, say so
            console.log('Notes all displayed');
        }
    });
}

// Define the deleteItem() function
function deleteItem(e) {
    // Number（e.target.parentNode.getAttribute（'data-note-id'））を使用して削除するレコードのIDを取得します—レコードのIDが保存されたことを思い出してください<li>が最初に表示されたときのdata-note-id属性。ただし、属性はデータ型文字列であるため、グローバルな組み込みのNumber（）オブジェクトを介して渡す必要があります。したがって、数値を期待するデータベースでは認識されません。
    // retrieve the name of the task we want to delete. We need
    // to convert it to a number before trying to use it with IDB; IDB key
    // values are type-sensitive.
    const noteId = Number(e.target.parentNode.getAttribute('data-note-id'));
  
    // open a database transaction and delete the task, finding it using the id we retrieved above
    // We then get a reference to the object store using the same pattern we've seen previously, and use the IDBObjectStore.delete() method to delete the record from the database, passing it the ID.
    const transaction = db.transaction(['notes_os'], 'readwrite');
    const objectStore = transaction.objectStore('notes_os');
    const deleteRequest = objectStore.delete(noteId);
  
    // report that the data item has been deleted
    transaction.addEventListener('complete', () => {
        // delete the parent of the button
        // which is the list item, so it is no longer displayed
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        console.log(`Note ${noteId} deleted.`);
  
        // Again, if list item is empty, display a 'No notes stored' message
        // データベーストランザクションが完了すると、メモの<li>がDOMから削除され、<ul>が空になっているかどうかを再度確認して、必要に応じてメモを挿入します。
        if(!list.firstChild) {
            const listItem = document.createElement('li');
            listItem.textContent = 'No notes stored.';
            list.appendChild(listItem);
        }
    });
}