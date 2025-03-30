    window.onload = function() {

        function logMessage(options = []) {
        var div = document.createElement("div");
        div.style.backgroundColor = "#1c1e22";
        div.style.display = "none";
        div.style.flexDirection = "column";
        div.style.opacity = "0";
        div.style.zIndex = "99999";
        div.setAttribute("id", "commandpanel")
        div.style.position = "absolute";
        div.style.top = "50%";
        div.style.left = "50%";
        div.style.transform = "translate(-50%,-50%)";
        div.style.transition = "opacity 0.2s";
        div.style.width = "50vw";
        div.style.height = "auto";
        div.style.maxHeight = "25vw";
        div.style.borderRadius = "15px";
        div.style.padding = "5px";
        div.style.overflow = "hidden";
        div.style.backdropFilter = "blur(15px)";        
        
        
        document.body.appendChild(div);

        var inpbar = document.createElement("input");
        inpbar.setAttribute("id", "inputbar");
        inpbar.style.width = "calc(100% - 10px)";
        inpbar.style.height = "calc(15% - 10px)";
        inpbar.style.minHeight = "60px";
        inpbar.style.borderRadius = "10px";
        inpbar.style.border = "none";
        inpbar.style.width = "100%";
        inpbar.style.boxSizing = "border-box";
        inpbar.style.fontSize = "140%";
        inpbar.setAttribute("autocomplete", "off");
        inpbar.style.outline = "none";
        inpbar.style.boxShadow = "none";



        var cdiv = document.getElementById("commandpanel");
        cdiv.appendChild(inpbar);


        var datalist = document.createElement("ul");
        datalist.setAttribute("id", "choices");
        datalist.style.listStyleType = "none";
        datalist.style.overflowY = "scroll";
        datalist.style.height = "100%";
        datalist.style.marginBottom = "0";
        datalist.style.width = "100%";
        datalist.style.boxSizing = "border-box";
        datalist.style.marginTop = "5px";
        datalist.style.borderRadius = "10px";
        datalist.style.color = "white";
        datalist.style.listStyleType = "none";
        datalist.style.fontFamily = "arial";
        datalist.style.padding = "0";
        datalist.style.textAlign = "left";
        datalist.style.scrollbarWidth = "none";
        datalist.style.msOverflowStyle = "none";

        options.forEach(option => {
            var li = document.createElement("li");
            li.classList.add("option");
            li.setAttribute("value", option.url);
            li.textContent = option.label;
            li.style.backgroundColor = "#2c2f34";
            li.style.paddingTop = "15px";
            li.style.paddingLeft = "10px";
            li.style.display = "flex";
            li.style.alignItems = "center";
            li.style.paddingBottom = "15px";
            li.style.margin = "5px 0";
            li.style.borderRadius = "5px";
            li.style.cursor = "pointer";
            li.style.transition = "background-color 0.2s";

            li.addEventListener("mouseover", () => {
                li.style.backgroundColor = "#555a62";
            });
        
            li.addEventListener("mouseout", () => {
                li.style.backgroundColor = "#2c2f34";
            });
            li.addEventListener("click", () => {
                function callUserFunction() {
                    if (typeof window.userFunction === "function") {
                        window.userFunction(option.url);
                        var panel = document.getElementById("commandpanel");
                panel.style.opacity = "0";
                setTimeout(function () {
                    panel.style.display = "none";
                }, 200);
                document.getElementById("inputbar").value = "";
                visible = 0;
                    } else {
                        console.warn("User didn't define userFunction()!");
                    }
                }
                callUserFunction();
            });
            datalist.appendChild(li);
        });
        div.appendChild(datalist);
        }

        document.addEventListener("click", function (event) {
            var panel = document.getElementById("commandpanel");
            
            if (panel && visible === 1) {
                if (!panel.contains(event.target)) {
                    panel.style.opacity = "0";
                    setTimeout(function () {
                        panel.style.display = "none";
                    }, 200);
                    document.getElementById("inputbar").value = "";
                    document.body.focus();
                    visible = 0;
                }
            }
        });

    var ctrl = false;
    var k = false;
    var visible = 0;

        if (typeof window !== 'undefined') {
        window.ZenCommand = {
            logMessage
        };
        }
    
        addEventListener("keydown", (event) => {
            if(event.key === "m"){
                k = true;
            }
            if(event.key === "Control" || event.key === "metaKey"){
                ctrl = true;
            }
            if(event.key === "Enter"){
                if(visible === 1){
                    var urzz = document.getElementById("inputbar").value;
                    function callUserFunction() {
                        if (typeof window.userFunction === "function") {
                            window.userFunction(urzz);
                            var panel = document.getElementById("commandpanel");
                    panel.style.opacity = "0"; 
                    setTimeout(function () {
                        panel.style.display = "none";
                    }, 200);
                    document.getElementById("inputbar").value = "";
                    visible = 0;
                        } else {
                            console.warn("User didn't define userFunction()!");
                        }
                    }
                    callUserFunction();
                }
            }

            if(k === true && ctrl === true){
                if(visible === 0){
                console.log("combo");
                var panel = document.getElementById("commandpanel");
                panel.style.display = "flex";
                setTimeout(function () {
                    panel.style.opacity = "0.9";
                }, 20);
                document.getElementById("inputbar").focus();
                visible = 1;
                } else {
                console.log("combo");
                var panel = document.getElementById("commandpanel");
                panel.style.opacity = "0";
                setTimeout(function () {
                    panel.style.display = "none";
                }, 200);
                document.getElementById("inputbar").value = "";
                document.body.focus();
                visible = 0;
                }
                
            }
        });

        addEventListener("keyup", (event) => {
            if(event.key === "m"){
                k = false;
            }
            if(event.key === "Control"){
                ctrl = false;
            }

        });
    };
    
