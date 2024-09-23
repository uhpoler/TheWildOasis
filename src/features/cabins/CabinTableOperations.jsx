import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";

function CabinTableOperations() {
  return (
    <div>
      <TableOperations>
        <Filter
          filterField="discount"
          options={[
            { value: "all", lable: "All" },
            { value: "no-discount", lable: "No-discount" },
            { value: "with-discount", lable: "With-discount" },
          ]}
        />
      </TableOperations>
    </div>
  );
}

export default CabinTableOperations;
