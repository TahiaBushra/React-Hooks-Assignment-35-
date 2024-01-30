import { useEffect, useState } from "react";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState("");
  useEffect(() => {
    const getPhotos = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
        if (!res.ok) throw new Error("Something went wrong");
        const data = await res.json();
        setPhotos(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getPhotos();
  }, []);
  if (photos.length > 0) {
    return (
      <div className="grid grid-cols-5 gap-5 container mx-auto">
        {photos.slice(0, 50).map((photo) => (
          <img key={photo?.id} src={photo?.url} alt="" className="w-32" />
        ))}
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>{error}</p>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div>
        <p></p>
      </div>
    );
  }
};

export default App;
