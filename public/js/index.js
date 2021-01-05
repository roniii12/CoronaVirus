function changeColors () {
    var elems = document.body.getElementsByTagName("*"),
        oldColor = "rgb(182, 202, 81)",
        newColor = "rgb(0, 0, 0)";

    function getValue (elem, property) {
        return window.getComputedStyle(elem, null)
            .getPropertyValue(property);
    }
  
    console.log(elems);
 
    [].forEach.call(elems, function (elem) {
        var backgroundColor = getValue(elem, "background-color"),
            borderColor = getValue(elem, "border-color"),
            color = getValue(elem, "color"),
            fill = getValue(elem,"fill"),
            stroke = getValue(elem,"stroke");

        if (backgroundColor == oldColor) {
            elem.style.backgroundColor = newColor;
        }
        if (fill == oldColor) {
            elem.style.fill = newColor;
        }
        if (stroke == oldColor) {
            elem.style.stroke = newColor;
        }

        if (borderColor == oldColor) {
            elem.style.borderColor = newColor;
        }

        if (color == oldColor) {
            elem.style.color = newColor;
        }    
    });
}