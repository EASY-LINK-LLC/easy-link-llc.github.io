import { Button, Grid, Text, Table } from "@geist-ui/core"
import React, { useEffect, useState } from "react"
import _ from "lodash"

const PromotionTable = () => {
  const [products, setProducts] = useState({})

  const getProducts = async () => {
    await fetch("http://104.149.178.74:5000/api/products", {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    })
      .then((res) => res.json())
      .then((data) => setProducts(_.find(data.products)))
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <Grid.Container gap={1} justify="center">
        <Grid xs={12} md={12}>
          {products &&
            products.map((p, i) => (
              <div key={i}>
                <h2>{p.name}</h2>
              </div>
            ))}
        </Grid>
      </Grid.Container>
    </>
  )
}
export default PromotionTable
