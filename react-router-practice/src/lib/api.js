const FIREBASE_DOMAIN = "https://nuxt-blog-6b95b.firebaseio.com";

export async function reqGetAllQuotes() {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  const responseData = Object.keys(data).map((res) => ({
    ...data[res],
    id: res,
  }));
  return responseData;
}

export async function reqSimpanQuotes(params) {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`, {
    method: "POST",
    body: JSON.stringify(params),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Could not add quotes.");
  }

  return null;
}

export async function reqDetailQuotes(quotesId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${quotesId}.json`)
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error || "Could not fetch quote.");
  }

  return data
}

export async function addComment(params){
  console.log(params)
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${params.quoteId}.json`, {
    method: 'POST',
    body: JSON.stringify(params.parameter),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error || "Could not add comments.");
  }

  return null
}

export async function getComments(quoteId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quotes.');
  }

  const transformedQuotes = [];

  for (const key in data) {
    const quoteObj = {
      id: key,
      ...data[key],
    };

    transformedQuotes.push(quoteObj);
  }

  return transformedQuotes;
}