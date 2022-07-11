// ---------------- REST API ----------------
// request (call) aneluc partadir petqa uxarkel method@ ev url

// --------- GET ----------
// --------- POST ---------
// --------- DELETE ---------
// --------- PUT ---------

// fetch('link', {
//     method: 'POST',
//     body: JSON.stringify({x: 5})
// });

// ete method chenq nshum default get-a

// ----------- response status -----------
// ----------- request is async -----------
// fetch('https://cat-fact.herokuapp.com/facts');
// fetch('https://pokeapi.co/api/v2/pokemon');
// fetch('https://pokeapi.co/api/v2/pokemon/ditto');
// fetch('https://api.github.com/users/john');
// fetch('https://api.github.com/users/john');
// fetch('https://api.github.com/users/octocat/followers');

// fetch return promise
// fetch('https://api.github.com/users/john')
//     .then(response => console.log(response))
//     .catch(err => console.log(err))

// fetch('https://api.github.com/users/john')
//     .then(response => response.json())
//     .then(x => console.log(x))
//     .catch(err => console.log(err))

// ----------- example -----------
// put in html
{/* <div id='user'></div> */}

// fetch('https://api.github.com/users/john')
//     .then(response => response.json())
//     .then(result => showUser(result))
//     .catch(err => console.log(err))

// function showUser(result) {
//     console.log(result);
//     let userDiv = document.getElementById('user');
//     userDiv.innerText = result['name']
// }

// fetch('https://cat-fact.herokuapp.com/facts')
//     .then(res => res.json())
//     .then(result => foo(result))
//     .catch(err => console.log(err))

// fetch('https://cat-fact.herokuapp.com/facts',{
//     method: 'POST',
//     body: {}
// })
//     .then(res => res.json())
//     .then(result => foo(result))
//     .catch(err => console.log(err))

// function foo(data) {
//     console.log(data);
//     const user = document.getElementById('user');
//     data && data.map(item => {
//         const p = document.createElement('p');
//         p.innerHTML = item.text;
//         user.appendChild(p)})
// }

// -------------------------------------------

