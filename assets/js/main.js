window.onload = function(){
    'use strict';

    (function highlight_nav_link(){

        function get_path_of_url(link){
            link = link.split('/');
            link = link[link.length - 1].split('.')[0];
            return link;
        }

        // get all the nav links. [1] is there because there are multiple
        // nodes (navlinks). We only need one. Note: these are anchor tags 
        const nav_link_nodes = document.querySelectorAll('.page-link');
        const current_url = document.URL;
        const weblog_link = document.getElementById('js-weblog');

        nav_link_nodes.forEach(function(node){
            // we need to add .href here because
            // each node is still an anchor tag
            if (get_path_of_url(node.href) !== get_path_of_url(current_url)){
                node.classList.remove('nav-link-active')
                // if no node is equal to the current path, it means:
                // a) we are in the homepage
                // b) we are in a blog post
                // c) or a newly created page not located in root
                // and since we don't highlight navlinks when we are in the homepage
                // we are more concern when we are in a blogpost,
                // so if we are in a blogpost, we should highlight the weblog navlink
                if (current_url.split('/')[3] === "weblog"){
                    weblog_link.classList.add('nav-link-active');
                }
            } else {
                node.classList.add('nav-link-active');
            }
        }, nav_link_nodes)
    })();

    (function backToTop(){
        const upArrow = document.getElementById('js-backToTop');
        upArrow.addEventListener('click', function(){
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        });
    })();



}