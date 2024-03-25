function jumpTo(title){

    var position = title.getBoundingClientRect().top;
    var offsetPosition = position + window.scrollY - 128;
  
    window.scrollTo({
        top: offsetPosition
    });
}