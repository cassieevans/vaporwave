document.addEventListener('DOMContentLoaded', function() {

    var bounceIn = anime({
        targets: '.letter__part',
        opacity: {
            value: [0, 1],
            duration: 300,
            easing: 'linear',
            delay: 1000
        },
        delay: function(el, i) {
            return i * 40
        },
        // delay increment per letter.
    });

    var lineDrawing = anime({
        targets: '.color-3',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeOutElastic',
        duration: 4000,
        delay: 1000,
        loop: false,
        direction: 'alternate',
    });

    var lineDrawing = anime({
        targets: '.color-2',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeOutElastic',
        duration: 4000,
        delay: 1300,
        loop: false,
        direction: 'alternate',
    });

    var fadeOut = anime({
        targets: '.letters',
        opacity: {
            value: [1, 0],
            duration: 300,
            easing: 'linear',
            delay: 4000
        }
    });


    var slideOut = anime({
        targets: '.greyLeft',
        duration: 600,
        translateX: '-100%',
        easing: 'easeInOutQuad',
        delay: 5000

    });
    var slideOut = anime({
        targets: '.greyRight',
        duration: 600,
        translateX: '100%',
        easing: 'easeInOutQuad',
        delay: 5000

    });


}, false);


window.onload = function() {




    setTimeout(function() {


        //GET A RANDOM NUMBER FUNCTION
        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
        }

        var camera, scene, renderer,
            light1, light2, light3, light4, light5, lightbg, line,
            loader, mesh;
        init();
        animate();

        function init() {
            var container = document.getElementById('canvas');

            camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
            camera.position.set(0, -6, 100);

            scene = new THREE.Scene();



            light1 = new THREE.PointLight(0x05ffa1, 1, 100);
            scene.add(light1);
            light2 = new THREE.PointLight(0x01cdfe, 1, 100);
            scene.add(light2);
            light3 = new THREE.PointLight(0xb967ff, 1, 100);
            scene.add(light3);

            // draw the circles with canvas
            var PI2 = Math.PI * 2;
            var program = function(context) {
                context.beginPath();
                context.arc(0, 0, 1, 0, 2 * Math.PI, true);
                context.lineWidth = 0.5;
                context.stroke();
            };

            var sprite = new THREE.Sprite(new THREE.SpriteCanvasMaterial({
                color: 0x05ffa1,
                program: program
            }));
            light1.add(sprite);

            var sprite = new THREE.Sprite(new THREE.SpriteCanvasMaterial({
                color: 0x01cdfe,
                program: program
            }));
            light2.add(sprite);

            var sprite = new THREE.Sprite(new THREE.SpriteCanvasMaterial({
                color: 0xb967ff,
                program: program
            }));
            light3.add(sprite);


            light4 = new THREE.DirectionalLight(0xff71ce, 0.8);
            scene.add(light4);
            light4.position.y = 30;
            light4.position.x = 30;

            light5 = new THREE.DirectionalLight(0x01cdfe, 0.1);
            scene.add(light5);
            light4.position.y = 30;
            light4.position.x = -30;

            lightbg = new THREE.AmbientLight(0x3a0d74, 0.1);
            scene.add(lightbg);



            loader = new THREE.JSONLoader();
            loader.load('cassietutorial3.json', function(geometry) {
                mesh = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({
                    color: 0xffffff,
                    overdraw: 0.5,

                }));
                scene.add(mesh);
                mesh.scale.set(8, 8, 8);
                mesh.position.y = -10;


            });


            // MAKING THE TRIANGLE



            var materialline = new THREE.LineBasicMaterial({
                color: 0xffffff,
                linewidth: 6
            });
            var geometryline = new THREE.Geometry();
            geometryline.vertices.push(new THREE.Vector3(0, 0, 0));
            geometryline.vertices.push(new THREE.Vector3(55, 0, 0));
            geometryline.vertices.push(new THREE.Vector3(40, 40, 0));
            geometryline.vertices.push(new THREE.Vector3(0, 0, 0))


            var line = new THREE.Line(geometryline, materialline);
            scene.add(line);
            line.rotation.x = 6;
            line.rotation.z = 2;
            line.position.x = 25;
            line.position.z = 12;
            line.position.y = -20;





            renderer = new THREE.CanvasRenderer({
                alpha: true
            });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setClearColor(0xffffff, 0);
            container.appendChild(renderer.domElement);
            //
            window.addEventListener('resize', onWindowResize, false);
        }

        // const orbit = new THREE.OrbitControls(camera, renderer.domElement);
        // orbit.enableZoom = false;

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }
        //
        function animate() {
            requestAnimationFrame(animate);
            render();
        }

        function render() {
            var time = Date.now() * 0.0005;
            // if ( mesh ) mesh.rotation.y -= 0.01;

            light1.position.x = Math.sin(time * 0.7) * 15;
            light1.position.y = Math.cos(time * 0.5) * 27;
            light1.position.z = Math.cos(time * 0.3) * 15;
            light2.position.x = Math.cos(time * 0.3) * 17;
            light2.position.y = Math.sin(time * 0.5) * 26;
            light2.position.z = Math.sin(time * 0.7) * 17;
            light3.position.x = Math.sin(time * 0.7) * 13;
            light3.position.y = Math.cos(time * 0.3) * 28;
            light3.position.z = Math.sin(time * 0.5) * 13;

            renderer.render(scene, camera);
        }
        setTimeout(function() {
            document.getElementById("preloader").style.display = "none";
        }, 4000)

    }, 4000)
};