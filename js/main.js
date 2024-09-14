document.getElementById("clearButton").onclick = function(e) {
    // Если необходимо предотвратить/отменить событие по умолчанию,
    // то необходимо вызвать метод preventDefault у события
    // https://developer.mozilla.org/ru/docs/Web/API/Event/preventDefault
    e.preventDefault();
    // если необходимо также предотвратить дальнейшее "всплытие" события,
    // то необходимо вызвать метод stopPropagation у события
    // https://developer.mozilla.org/ru/docs/Web/API/Event/stopPropagation
    // e.stopPropagation();
    document.getElementById("textInput").value = "";
    let stick = document.getElementsByClassName("stick")
    let s1 = stick[0]
    let s2 = stick[1]
    let s3 = stick[2]
    let s4 = stick[3]
    let s5 = stick[4]
    let s6 = stick[5]
    let s7 = stick[6]
    let s8 = stick[7]
    if (s1.classList.contains("stick--active")) {
        console.log('aa')
        s1.classList.remove("stick--active")
        s2.classList.remove("stick--active")
        s3.classList.remove("stick--active")
        s4.classList.remove("stick--active")
        s5.classList.remove("stick--active")
        s6.classList.remove("stick--active")
        s7.classList.remove("stick--active")
        s8.classList.remove("stick--active")
    }

    else {
        s1.classList.add("stick--active")
        s2.classList.add("stick--active")
        s3.classList.add("stick--active")
        s4.classList.add("stick--active")
        s5.classList.add("stick--active")
        s6.classList.add("stick--active")
        s7.classList.add("stick--active")
        s8.classList.add("stick--active")
    }
}

