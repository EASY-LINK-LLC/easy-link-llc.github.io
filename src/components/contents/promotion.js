import { Button, Grid, Text } from "@geist-ui/core"
import React from "react"

const PromotionTable = () => {
  const dataSource = [
    { property: "type", description: "Content type", operation: "" },
    { property: "Component", description: "DOM element to use", operation: "" },
    { property: <Text b>bold</Text>, description: "Bold style", operation: "" }
  ]
  const [data, setData] = React.useState(dataSource)
  const renderAction = (value, rowData, index) => {
    const removeHandler = () => {
      setData((last) => last.filter((_, dataIndex) => dataIndex !== index))
    }
    return (
      <Button type="error" auto scale={1 / 3} font="12px" onClick={removeHandler}>
        Remove
      </Button>
    )
  }
  return (
    <>
      <Grid.Container gap={2} justify="center">
        <Grid xs={12} md={6}></Grid>
        <Grid xs={12} md={6}></Grid>
      </Grid.Container>
    </>
  )
}
export default PromotionTable
