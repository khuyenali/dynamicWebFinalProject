const btn = document.getElementById("submit");

btn.onclick = function () {
    //This MUST alert HTML content of editor.
    // console.log(tinyMCE.activeEditor.getContent());
    const data = tinyMCE.activeEditor.getContent();
    const jsonData = JSON.stringify(data);
    $.post('../PHP/post.php', jsonData)
        .done((data) => {
            console.log(JSON.parse(data));
        });
};


