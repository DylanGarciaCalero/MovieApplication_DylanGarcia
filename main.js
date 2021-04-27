(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elemleft = document.querySelector("#parallax--left");
    const elemright = document.querySelector("#parallax--right");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${-10 - (_mouseX - _w) * 0.01}% ${-10 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${70 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.03}% ${80 - (_mouseY - _h) * 0.03}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        let _depth1y = `${150 - (_mouseX - _w) * 0.01}% ${150 - (_mouseY - _h) * 0.01}%`;
        let _depth2y = `${15 - (_mouseX - _w) * 0.02}% ${15 - (_mouseY - _h) * 0.02}%`;
        let _depth3y = `${55 - (_mouseX - _w) * 0.03}% ${55 - (_mouseY - _h) * 0.03}%`;
        let y = `${_depth3y}, ${_depth2y}, ${_depth1y}`;
        
        elemleft.style.backgroundPosition = x;
        elemright.style.backgroundPosition = y;
    }

})();