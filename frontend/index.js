const form = document.getElementById("form");
//console.log(form);

form.addEventListener("submit",submitform);

function submitform(e) {
    e.preventDefault();

    const name = document.getElementById("name");

    const files = document.getElementById("files");

    const formdata = new FormData(form);
    formdata.append("name", name.value);


    for(let i=0;i<files.files.length;i++)
    {
        formdata.append("files", files.files[i]);
        //console.log(files);
        console.log(files.files[i]);
        console.log(formdata);
    }

    console.log(formdata);

    fetch("http://localhost:4000/upload_files", {
      method: "POST",
      body: formdata,
    })
      .then((res) => console.log(res))
      .catch((err) => ("Error occured", err));

}