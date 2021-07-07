block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object="";

function new_image(get_image)
{
    // upload images
}

window.addEventListener("keydown" , my_keydown);

function my_keydown(e)
{
    keypressed = e.keycode;
    console.log(keypressed);

    if (keypressed == "r") // add appropriate keycode
    {
        // upload red ranger
    }
    if(keypressed =='71')
    {
        block_x = 200;
        // upload green ranger
    }
}