import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full py-6 md:px-2 sm:px-4">
      <h1 className="text-6xl font-semibold my-4">Next.js Portfolio!</h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa officiis ad totam quae nisi saepe corporis ea natus at, repudiandae esse, alias consequuntur numquam? Sunt, quis. Ducimus blanditiis distinctio magnam quisquam, veritatis dolorum facere natus labore ipsa id sequi aut.</p>

      <div className="my-4 space-x-4">
        <Button
          className="active:scale-95"
        >
          btnOne
        </Button>

        <Button
          className="active:scale-95"
          variant="secondary"
        >
          btnTwo
        </Button>
      </div>
    </div>
  );
}
