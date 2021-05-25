async function SendRequest(url, data, method) {
  if (method == "post") {
    requestObject = {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
  } else {
    requestObject = {
      method: "get",
      headers: { "Content-Type": "application/json" },
    };
  }
  var response = await fetch(url, requestObject);

  return await response.json();
}

function creatPost() {
  url = "https://jsonplaceholder.typicode.com/posts";
  data = {
    title: document.getElementById("post.title").value,
    body: document.getElementById("post.body").value,
    userId: document.getElementById("post.user.id").value,
  };
  this.SendRequest(url, data, "post");
}

function displaypost(posts) {
  posts.forEach((post) => {
    document.getElementById("result").innerHTML +=
      '<h2 class="title">' + post.title + "</h2>" + "<p>" + post.body + "</p>";
  });
}

SendRequest("https://jsonplaceholder.typicode.com/posts", null, "GET").then(
  function (posts) {
    this.displaypost(posts);
  }
);
