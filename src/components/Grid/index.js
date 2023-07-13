import Item from "./item"

const Grid = () => {
    return <>
        <table border={5}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Status</th>
                <th>Origin</th>

              </tr>
            </thead>
            <tbody>
              <Item 
                  id={1} 
                  name={"Sneha"}
                  gender={"female"}
                  status={"alive"}
                  origin={"earth"}
                  />
                   <Item 
                  id={1} 
                  name={"Sneha"}
                  gender={"female"}
                  status={"alive"}
                  origin={"earth"}
                  /> <Item 
                  id={1} 
                  name={"Sneha"}
                  gender={"female"}
                  status={"alive"}
                  origin={"earth"}
                  /> <Item 
                  id={1} 
                  name={"Sneha"}
                  gender={"female"}
                  status={"alive"}
                  origin={"earth"}
                  /> <Item 
                  id={1} 
                  name={"Sneha"}
                  gender={"female"}
                  status={"alive"}
                  origin={"earth"}
                  />
            </tbody>
        </table>
        </>
    
}

export default Grid