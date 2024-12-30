import { DataGridPlus } from "data-grid-plus";
import { MockData } from "./constants/mock-data";
import { MockDataModel } from "./models/mock-data-model";

export const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100dvh - 32px)",
        width: "calc(100dvw - 32px)",
        padding: 16,
        backgroundColor: "#f4f7f9",
      }}
    >
      <DataGridPlus<MockDataModel>
        data={MockData}
        columns={[
          { label: "Código", field: "id", type: "number" },
          { label: "Nome", field: "name", type: "string" },
          { label: "Telefone", field: "phone", type: "number", mask: "phone" },
          { label: "CPF", field: "cpf", type: "number", mask: "cpf" },
          { label: "Salário", field: "salary", type: "decimal" }, // type: "decimal" aplica mascará decimal automaticamente
          {
            label: "Status",
            field: "status",
            type: "string",
            // Exemplo usando máscara personalizada
            mask: ({ status }) => {
              if (status === 0) return "Processando";
              return "Finalizado";
            },
          },
        ]}
      />
    </div>
  );
};
