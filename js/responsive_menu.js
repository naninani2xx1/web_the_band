
var header = document.getElementById('header');

var mobileMenu = document.getElementById('mobile-menu')

var headerHeight = header.clientHeight;

// đóng mở menu
mobileMenu.onclick = function () { 


    var isClosed = header.clientHeight === headerHeight
   
    if (isClosed) {
        header.style.height = 'auto'

    } else {
        header.style.height = null
    }
}


var menuItems = document.querySelectorAll('#nav li a[href*="#"]');

for (const menuItem of menuItems) {

    
    menuItem.onclick = function (e) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        
        if(isParentMenu){
            e.preventDefault();
        }else{
            header.style.height = null
        }
    }
}

