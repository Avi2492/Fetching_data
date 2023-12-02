import React, { useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import * as d3 from "d3";

function Data() {
  const data = useLoaderData();
  const chartRef = useRef();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (!Array.isArray(data)) {
      return `<div>The data is not correctly Present</div>`;
    }

    const filtered = data.filter((item) => item.userId === 1);
    setFilteredData(filtered);

    if (filtered.length === 0) {
      return `<div>The data is not written by id 1</div>`;
    }

    // Calculate the total number of posts by User ID 1
    const numberOfPosts = filtered.length;

    // D3.js pie chart
    const pie = d3.pie();
    const arc = d3.arc().innerRadius(0).outerRadius(100);

    const svg = d3.select(chartRef.current);
    svg.selectAll("*").remove();

    const g = svg.append("g").attr("transform", "translate(100,100)");

    g.selectAll("path")
      .data(pie([numberOfPosts]))
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", "#FF6384");
    g.append("text")
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .attr("fill", "#31304D")
      .attr("font-weight", "bold")
      .style("font-size", "2rem")
      .text(`Post: ${numberOfPosts}`);
  }, [data]);

  return (
    <>
      <div className="flex flex-col items-center justify-center m-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white bg-orange-500 m-2 p-2 rounded-lg mb-4">
          Posts Written by User ID 1 in Pie Chart
        </h2>
        <svg ref={chartRef} width={200} height={200} />
      </div>
      <div className="text-center m-4 bg-gray-500 text-white p-4 text-lg md:text-xl lg:text-2xl rounded-lg">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-4 bg-slate-900 rounded-lg m-2 p-2">
          Data Fetch in Table Format
        </h2>
        <div className="overflow-x-auto">
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 m-2 mx-2 text-black rounded-md bg-orange-500">
                  UserID
                </th>
                <th className="px-4 py-2 m-2 mx-2 text-black rounded-md bg-red-500">
                  ID
                </th>
                <th className="px-4 py-2 m-2 mx-2 text-black rounded-md bg-green-500">
                  Title
                </th>
                <th className="px-4 py-2 m-2 mx-2 text-black rounded-md bg-yellow-500">
                  Body
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((post) => (
                <tr key={post.id}>
                  <td className="px-4 py-2 m-2 text-black">{post.userId}</td>
                  <td className="px-4 py-2 m-2 text-black">{post.id}</td>
                  <td className="px-4 py-2 m-2 text-black">{post.title}</td>
                  <td className="px-4 py-2 m-2 text-black">{post.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Data;

export const dataInfoLoader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};
