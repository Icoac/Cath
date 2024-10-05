const naoBtn = document.getElementById('naoBtn');
        const simBtn = document.getElementById('simBtn');
        const resultado = document.getElementById('resultado');
        const container = document.querySelector('.container');

        // Criar corações de fundo
        function createBackgroundHearts() {
            const backgroundHearts = document.querySelector('.background-hearts');
            const heart = document.createElement('div');
            heart.className = 'background-heart';
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
            backgroundHearts.appendChild(heart);

            heart.addEventListener('animationend', () => heart.remove());
        }

        // Iniciar corações de fundo
        setInterval(createBackgroundHearts, 500);

        function moveButton(event) {
            const containerRect = container.getBoundingClientRect();
            const maxX = containerRect.width - naoBtn.offsetWidth - 40;
            const maxY = containerRect.height - naoBtn.offsetHeight - 40;
            
            let newX, newY;
            do {
                newX = Math.random() * maxX;
                newY = Math.random() * maxY;
            } while (
                Math.abs(newX - event.clientX) < 100 &&
                Math.abs(newY - event.clientY) < 100
            );
            
            naoBtn.style.position = 'absolute';
            naoBtn.style.left = newX + 'px';
            naoBtn.style.top = newY + 'px';

            createHeart(event.clientX, event.clientY);
        }

        function createHeart(x, y) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '❤️';
            heart.style.left = (x - container.offsetLeft) + 'px';
            heart.style.top = (y - container.offsetTop) + 'px';
            container.appendChild(heart);

            heart.style.animation = 'floatHeart 2s ease-out forwards';
            heart.addEventListener('animationend', () => heart.remove());
        }

        function celebration() {
            resultado.style.display = 'block';
            resultado.innerHTML = 'Acho bem rsrsrsrs ❤️';
            naoBtn.style.display = 'none';
            
            // Explosão de corações
            for (let i = 0; i < 30; i++) {
                setTimeout(() => {
                    const x = Math.random() * container.offsetWidth;
                    const y = Math.random() * container.offsetHeight;
                    createHeart(x + container.offsetLeft, y + container.offsetTop);
                }, i * 100);
            }

            // Adicionar classe de celebração ao container
            container.style.animation = 'pulseContainer 0.5s infinite';
        }

        naoBtn.addEventListener('mouseover', moveButton);
        simBtn.addEventListener('click', celebration);

        // Criar corações aleatórios periodicamente
        setInterval(() => {
            if (Math.random() > 0.7) {
                const x = Math.random() * container.offsetWidth + container.offsetLeft;
                const y = Math.random() * container.offsetHeight + container.offsetTop;
                createHeart(x, y);
            }
        }, 1000);