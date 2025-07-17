import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { FaFileInvoice, FaGavel, FaHistory } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";



const columns = [
  {
    header: "Vehicle",
    accessorKey: "vehicle",
    cell: info => (
      <>
        <p className="fw-bold mb-1">{info.row.original.vehicle}</p>
        <p className="text-secondary">VIN: {info.row.original.vin}</p>
      </>
    )
  },
  {
    header: "My Bid",
    accessorKey: "bid",
    cell: info => <span className="text-success fw-bold">{info.getValue()}</span>,
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: info => (
      <span className={`text-white fw-bold rounded-2 d-inline-block py-1 px-3 ${info.row.original.statusBg}`}>
        {info.getValue()}
      </span>
    )
  },
  {
    header: "Date",
    accessorKey: "date"
  },
  {
    header: "Action",
    accessorKey: "action",
    cell: info => {
      const Icon = info.row.original.icon;
      const style = info.row.original.actionStyle;
      return (
        <span className={`border border-2 d-inline-flex py-1 px-3 rounded-2 gap-1 align-items-center ${style}`}>
          <Icon /> {info.getValue()}
        </span>
      );
    }
  },
];

const TanStackBidTable = () => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <div className="table-responsive mx-3 my-4">
      <table className="table">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TanStackBidTable;

const data = [
  {
    vehicle: "2022 Honda Civic LX",
    vin: "1HGBH41JXMN109186",
    bid: "$18,200",
    status: "Outbid",
    statusBg: "bg-warning",
    date: "Mar 20, 2024",
    action: "Rebid",
    icon: FaGavel,
    actionStyle: "border-primary text-primary",
  },
  {
    vehicle: "2021 Toyota Camry LE",
    vin: "4T1G11AK6MU123456",
    bid: "$22,300",
    status: "Won",
    statusBg: "bg-success",
    date: "Mar 18, 2024",
    action: "Invoice",
    icon: FaFileInvoice,
    actionStyle: "border-info text-info",
  },
  {
    vehicle: "2020 Ford Explorer XLT",
    vin: "1FM5K8D8XLGA12345",
    bid: "$31,500",
    status: "Lost",
    statusBg: "bg-danger",
    date: "Mar 15, 2024",
    action: "Ended",
    icon: IoMdClose,
    actionStyle: "border-secondary text-secondary",
  },
];