"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const createPage = () => {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const [name, setName] = useState("");
    const [backgroundImage, setBackgroundImage] = useState("");
    const [size, setSize] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
  
    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
  
      reader.onload = (event) => {
        setBackgroundImage(event.target.result);
      };
  
      reader.readAsDataURL(file);
    };
  
    const nextPage = () => {
      setCurrentPage(currentPage + 1);
    };
  
    const previousPage = () => {
      setCurrentPage(currentPage - 1);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform submission logic here
      // You can access all the collected data (name, backgroundImage, size, expiryDate)
      // and send it to your backend or perform any other required actions
      // For this example, we'll just log the data to the console
      console.log({
        name,
        backgroundImage,
        size,
        expiryDate,
      });
  
      // Reset the form
      setName("");
      setBackgroundImage("");
      setSize("");
      setExpiryDate("");
  
      // Redirect to a success page or perform any other desired actions
    //   router.push("/success");
    };
  
    const renderForm = () => {
      switch (currentPage) {
        case 1:
          return (
            <div>
              <h1>Page 1</h1>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button onClick={nextPage}>Next</button>
            </div>
          );
        case 2:
          return (
            <div>
              <h1>Page 2</h1>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
              {backgroundImage && (
                <img
                  src={backgroundImage}
                  alt="Background Preview"
                  style={{ maxWidth: "200px", marginTop: "10px" }}
                />
              )}
              <button onClick={previousPage}>Previous</button>
              <button onClick={nextPage}>Next</button>
            </div>
          );
        case 3:
          return (
            <div>
              <h1>Page 3</h1>
              <input
                type="radio"
                name="size"
                value="Full Size"
                checked={size === "Full Size"}
                onChange={(e) => setSize(e.target.value)}
              />
              <label>Full Size</label>
              <br />
              <input
                type="radio"
                name="size"
                value="Clip Size"
                checked={size === "Clip Size"}
                onChange={(e) => setSize(e.target.value)}
              />
              <label>Clip Size</label>
              <br />
              <button onClick={previousPage}>Previous</button>
              <button onClick={nextPage}>Next</button>
            </div>
          );
        case 4:
          return (
            <div>
              <h1>Page 4</h1>
              <input
                type="date"
                placeholder="Expiry Date"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
              />
              <button onClick={previousPage}>Previous</button>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          );
        default:
          return null;
      }
    };
  
    return <div>{renderForm()}</div>;
  };
  
  

export default createPage;
