import React from "react";
import Button from "./Button";

const DownloadGpx = () => {
  const getGpx = async () => {
    setLoading(true);
    const data = {
      starting_point: position,
      distance: distance,
    };
    try {
      const response = await getGpxData(data);
      const gpxData =
        typeof response === "string" ? response : await response.text();

      console.log("data ", gpxData);

      const blob = new Blob([gpxData], { type: "application/gpx+xml" }); // Create a Blob from the GPX data
      const url = URL.createObjectURL(blob); // Create a URL for the Blob
      const link = document.createElement("a"); // Create a temporary anchor element
      link.href = url;
      link.download = "route.gpx"; // Set the file name
      document.body.appendChild(link); // Append the link to the document
      link.click(); // Programmatically click the link to trigger the download
      document.body.removeChild(link); // Remove the link from the document
      URL.revokeObjectURL(url); // Revoke the Blob URL to free up memory
      setServerMessage({
        type: "success",
        text: "GPX file downloaded successfully!",
      });
    } catch (error) {
      console.error("Error downloading GPX file:", error);
      setServerMessage({
        type: "failed",
        text: "Failed to download GPX file.",
      });
    }
    setLoading(false);
  };

  return <Button text={"Download GPX"} onClick={getGpx} />;
};

export default DownloadGpx;
