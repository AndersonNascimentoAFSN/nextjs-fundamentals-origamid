// import { CreateProductForm } from "../../_components/create-product-form";
import { CreateProductFormAction } from "../../_components/create-product-form-action";

export default function CreateProductPage() {
  return (
    <div>
      <h1 className="text-3xl text-gray-800">Adicionar Produto</h1>

      {/* <CreateProductForm /> */}
      <CreateProductFormAction />
    </div>
  )
}
