function changeColors() {
    var elems = document.body.getElementsByTagName("*"),
        oldColor = "rgb(182, 202, 81)",
        newColor = "rgb(0, 0, 0)";

    function getValue(elem, property) {
        return window.getComputedStyle(elem, null)
            .getPropertyValue(property);
    }

    console.log(elems);

    [].forEach.call(elems, function (elem) {
        var backgroundColor = getValue(elem, "background-color"),
            borderColor = getValue(elem, "border-color"),
            color = getValue(elem, "color"),
            fill = getValue(elem, "fill"),
            stroke = getValue(elem, "stroke");

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

document.querySelectorAll("button.header-table-button").forEach(function (button) {
    button.addEventListener("click", function (e) {
        let parent = this.parentElement;
        let svgdown = parent.querySelector("svg.eva-arrow-down");
        let svgup = parent.querySelector("svg.eva-arrow-up")
        console.log(svgup)
        console.log(svgdown)
        let span;
        span = parent.querySelector('span')
        if(!span)
            span = document.createElement("span");
        if (svgup) {
            svgup.remove();
            span.remove();
        }
        else if(svgdown){
            svgdown.remove();
            span.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" class="eva eva-arrow-up" fill="#308bf6" style="width: 1em; line-height: 1; height: 1em; font-size: 1.25rem;"><g data-name="Layer 2"><g data-name="arrow-up"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"></rect><path d="M16.21 16H7.79a1.76 1.76 0 0 1-1.59-1 2.1 2.1 0 0 1 .26-2.21l4.21-5.1a1.76 1.76 0 0 1 2.66 0l4.21 5.1A2.1 2.1 0 0 1 17.8 15a1.76 1.76 0 0 1-1.59 1z"></path></g></g></svg>';
        }
        else if (!svgdown) {
            span.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" class="eva eva-arrow-down" fill="#308bf6" style="width: 1em; line-height: 1; height: 1em; font-size: 1.25rem;"><g data-name="Layer 2"><g data-name="arrow-downward"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"></rect><path d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05 2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17z"></path></g></g></svg>';
            parent.append(span);
        }
        if(span){
            span.addEventListener("click",function(e){
                this.remove();
            })
        }
    })
})