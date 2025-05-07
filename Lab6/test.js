 async function fetchUserData() {
      let usersRes = await fetch("https://jsonplaceholder.typicode.com/users");
      let users = await usersRes.json();
      let table = document.getElementById('userTable');
      let header = table.insertRow();
      ['Username', 'Email', 'Company', 'GeoLocation', 'Posts (Title + Comments Count)'].forEach(text => {
        let th = document.createElement('th');
        th.innerText = text;
        header.appendChild(th);
      });

      for (let user of users) {
        let row = table.insertRow();

        row.insertCell().innerText = user.username;
        row.insertCell().innerText = user.email;
        row.insertCell().innerText = user.company.name;
        row.insertCell().innerText = `Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng}`;

        let postsCell = row.insertCell();
        let ul = document.createElement('ul');

        let postsRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        let posts = await postsRes.json();

        for (let post of posts) {
          let commentsRes = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
          let comments = await commentsRes.json();

          let li = document.createElement('li');
          li.innerText = `${post.title} (${comments.length} comments)`;
          ul.appendChild(li);
        }

        postsCell.appendChild(ul);
      }
    }

    fetchUserData();