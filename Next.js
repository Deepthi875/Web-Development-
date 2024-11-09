// Step 1: Import necessary modules
import fs from 'fs';
import path from 'path';

// Step 2: Define the component that will display the items
function ItemsPage({ items }) {
  return (
    <div>
      <h1>List of Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

// Step 3: Fetch data at build time using getStaticProps
export async function getStaticProps() {
  // Read the JSON file and parse the data
  const filePath = path.join(process.cwd(), 'data', 'items.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const items = JSON.parse(jsonData);

  // Return the items as props to the page
  return {
    props: {
      items
    }
  };
}

export default ItemsPage;
