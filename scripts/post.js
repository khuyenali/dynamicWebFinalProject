
const btn = document.getElementById("submit");

btn.onclick = function () {
    //This MUST alert HTML content of editor.
    // console.log(tinyMCE.activeEditor.getContent());
    const data = tinyMCE.activeEditor.getContent();
    console.log(data);
    const jsonData = JSON.stringify(data);
    $.post("../PHP/post.php", jsonData)
        .done((data) => {
            console.log(data);
        })
        .fail((error) => {
            console.log(error);
        });

    // $.ajax({
    //     url: '../PHP/post.PHP',
    //     crossDomain: false,
    //     headers: {
    //         'X-My-Header': 'my header'
    //     }
    // });
};


