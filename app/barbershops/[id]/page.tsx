import { Button } from "@/components/ui/button"
import { db } from "@/lib/prisma"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface BarbershopPageProps {
  params: {
    id: string
  }
}

interface Barbershop {
  id: string
  name: string
  address: string
  phones: string[]
  description: string
  imageUrl: string
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
  const barbershop: Barbershop | null = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
  })

  if (!barbershop) {
    return notFound()
  }

  return (
    <>
      {/* IMAGEM */}
      <div className="relative h-[250px] w-full">
        <Image
          src={barbershop?.imageUrl}
          alt={barbershop?.name}
          fill
          className="object-cover"
        />

        <Button
          size="icon"
          variant="secondary"
          className="absolute left-4 top-2"
          asChild
        >
          <Link href="/">
            {" "}
            <ChevronLeftIcon />
          </Link>
        </Button>

        <Button
          size="icon"
          variant="secondary"
          className="absolute right-4 top-2"
        >
          <MenuIcon />
        </Button>
      </div>

      {/* TEXTO */}
      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-xl font-bold">{barbershop?.name}</h1>
        <div className="mb-2 flex items-center gap-2">
          <MapPinIcon className="text-primary" size={18} />
          <p>{barbershop?.address}</p>
        </div>
        <div className="flex items-center gap-2">
          <StarIcon className="fill-primary text-primary" size={18} />
          <p>5,0 (499 Avaliações)</p>
        </div>
      </div>

      {/* DESCRICAO */}
      <div className="space-y-3 border-b border-solid p-5">
        <h2 className="text-bold text-xs uppercase text-gray-400">Sobre nós</h2>
        <p className="text-justify text-sm">{barbershop?.description}</p>
      </div>
    </>
  )
}

export default BarbershopPage
