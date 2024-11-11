import api from "./api.json";
import Item from "../components/products/item";

type Data = {
  kind: string;
  totalItems: number;
  items: object[];
}


async function fetchBooks() {
  const responnse =
    await fetch(`https://www.googleapis.com/books/v1/volumes?q=search+terms&key=${api.api}
`);
  const data: Promise<Data> = await responnse.json();
  console.log(data);
  return data;
}

function sanitiseBook(data: any) {
  if (!data || !data.items) {
    console.error("Invalid data structure:", data);
    return [];
  }

  const items: Item[] = data.items.map((item) => {
    let sanItem: Item = {} as Item;  // Initialize sanItem to avoid undefined errors
    let volumeInfo = item.volumeInfo || {};

    sanItem.id = item.id;
    sanItem.title = volumeInfo.title || "Unknown Title";
    sanItem.authors = volumeInfo.authors || ["Unknown Author"];
    sanItem.language = volumeInfo.language || "Unknown Language";
    sanItem.pageCount = volumeInfo.pageCount || 0;
    sanItem.publisher = volumeInfo.publisher || "Unknown Publisher";
    sanItem.thumbnail = volumeInfo.imageLinks?.thumbnail || "default-thumbnail-url";
    sanItem.catagories = volumeInfo.categories
    sanItem.publishedDate = volumeInfo.publishedDate

    return sanItem;
  });

  console.log(items);
  return items;
}


export { fetchBooks, sanitiseBook };
