import React, { useEffect, useRef } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1.5;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `hsl(${Math.random() * 360}, 80%, 70%)`;
        this.opacity = 1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= 0.015;
      }
      draw() {
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    const addParticles = (x, y) => {
      for (let i = 0; i < 30; i++) {
        particles.push(new Particle(x, y));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.update();
        p.draw();
        if (p.opacity <= 0) particles.splice(i, 1);
      });
      requestAnimationFrame(animate);
    };

    animate();
    const handleClick = (e) => addParticles(e.clientX, e.clientY);
    window.addEventListener('click', handleClick);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id='home' className='w-full sm:h-screen h-auto bg-[#0a192f] pt-[4.5cm] sm:pt-0 relative overflow-hidden'>
      <canvas ref={canvasRef} className="fixed top-0 left-0 z-0 pointer-events-none" />

      <div className='max-w-[1000px] mx-auto px-8 flex flex-col sm:flex-row items-center justify-between h-full relative z-10'>

        {/* Profile Image */}
        <div className='mb-8 sm:mb-0'>
          <img
            src="/images/anjana.jpeg"
            alt="Anjana Tiwari"
            className='w-52 h-52 sm:mr-3 sm:w-72 sm:h-72 rounded-full object-cover border-4 border-pink-600 shadow-2xl'
          />
        </div>

        {/* Intro Text */}
        <div className='flex flex-col justify-center text-center sm:text-left'>
          <p className='text-pink-600 text-lg'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-extrabold text-[#ccd6fc] drop-shadow-lg'>Anjana Tiwari</h1>
          <h2 className='text-3xl sm:text-5xl font-semibold text-[#8892b0] mt-2'>I'm a Web and App Developer.</h2>
          <p className='text-[#8892b0] py-4 max-w-[600px] text-base sm:text-lg'>
            I'm a full-stack developer specializing in building (and occasionally designing)
            exceptional digital experiences. Currently, I'm focused on building responsive full-stack web applications and apps.
          </p>
          <div className='flex justify-center sm:justify-start'>
            <Link
              to='project'
              spy={true}
              smooth={true}
              offset={-150}
              duration={1200}
              className='text-white border-2 group flex items-center py-3 px-6 cursor-pointer hover:bg-pink-600 hover:border-pink-600 transition-all duration-300'
            >
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
