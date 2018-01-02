
Ways to write

1> Inline style     -- highest
2> intenral stylesheet  -- then
3> external stylesheet  -- last

Order - top to bottom approch means last one will override others

NOtation

1>

tag{
    color:red;
}

div, table, span{
    color:red;
}

2>
.className{
    color:red;
}

.my-table, .my-div{
    color:red;
}

3>

#id{
    color:red
}

#my-table{
    color:red
}

/************************************************

.parent .child{

}

.enrollment-form .heading{

}


.parent.sibling{
    
}

.enrollment-form.pad{

}

******/

Important css properties

padding - top right bottom left
     10px - 4 side;
     10px 5px - top_botton_10px left_righth_5px
     10px 3px 4px 2px - 
     10px 3px 4px _

 margin - top right bottom left
     10px - 4 side;
     10px 5px - top_botton_10px left_righth_5px
     10px 3px 4px 2px - 
     10px 3px 4px _

border - top right bottom left
     10px solid #ccc; - 4 side style color;
     10px 5px - top_botton_10px left_righth_5px
     10px 3px 4px 2px - 
     10px 3px 4px _

border-radius - top right bottom left
     10px solid #ccc; - 4 side style color;
     10px 5px - top_botton_10px left_righth_5px
     10px 3px 4px 2px - 
     10px 3px 4px _

display - none, block , inline-block, flex

background:

background-color: #fff;

line-height:20px;

float: left , right;

text-align : right, left , center

position : absolute, relative, fixed

z-index - 10

opacity : 0 - 1 

font-size : 12px, font-color:#ff, font-weight: bold , font-family: arial [font:12px bold arial]

max-width , min-width

max-height, min-height

overflow: auto, x , y

!important - to override any property