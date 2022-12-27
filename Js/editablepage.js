var someSessionVariable = @Session["Id"];
if (someSessionVariable > 0) {
    $(document).ready(() => {
        const box = document.querySelectorAll("#contentR");
        const box1 = document.querySelectorAll(".contentR");
        box.forEach(x => {
            $(x).attr({ 'contenteditable': 'true' });
            $(".edit-icon").show();
        })
        box1.forEach(x => {
            $(x).attr({ 'contenteditable': 'true' });
        })
    }
    )

}