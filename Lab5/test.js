class Engine {
      static count = 0;
      source;

      constructor(source) {
        if (new.target === Engine) {
          throw new Error("Cannot instantiate abstract class Engine directly.");
        }
        this.source = source;
        Engine.count++;
      }

      get source() {
        return this.source;
      }

      static getCount() {
        return Engine.count;
      }
    }

class Car extends Engine {
      constructor(top, left, source) {
        super(source);
        this.top = top;
        this.left = left;

        this.img = document.createElement('img');
        this.img.src = this.source;
        this.img.className = 'car';
        this.img.style.top = `${top}px`;
        this.img.style.left = `${left}px`;

        document.getElementById('road').appendChild(this.img);
      }

      set Top(value) {
        this.top = value;
        this.img.style.top = `${value}px`;
      }

      set Left(value) {
        this.left = value;
        this.img.style.left = `${value}px`;
      }

      moveLeft() {
        this.left = Math.max(0, this.left - 10);
        this.img.style.left = `${this.left}px`;
      }

      moveRight() {
        let road = document.getElementById('road');
        let maxRight = road.offsetWidth - this.img.offsetWidth;
        this.left = Math.min(maxRight, this.left + 10);
        this.img.style.left = `${this.left}px`;
      }

      ChangeStyle(styles) {
        Object.assign(this.img.style, styles);
      }

      moveCar(direction) {
        let move = () => {
          if (direction === 'left') {
            if (this.left > 0) {
              this.moveLeft();
              this.timer = requestAnimationFrame(move);
            }
          } else if (direction === 'right') {
            let maxRight = document.getElementById('road').offsetWidth - this.img.offsetWidth;
            if (this.left < maxRight) {
              this.moveRight();
              this.timer = requestAnimationFrame(move);
            }
          }
        };
        if (this.timer) cancelAnimationFrame(this.timer);
        move();
      }
    }

    
    let car = new Car(300, 300, 'https://imgs.search.brave.com/gpRf85tufkNtI3CiIyQojjPzdjOnUGGOkWQ5ezmebxM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/Ny9DYXItRnJlZS1Q/TkctSW1hZ2UucG5n');