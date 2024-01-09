export default function TableSkeleton() {
  return (
    <div className="w-full flex justify-between items-center gap-x-2   mt-2">
      <div className="animate-pulse [animation-delay:0.4s] bg-black/20 h-4 w-[90px] sm:w-[200px] rounded-md" />

      <div className="animate-pulse [animation-delay:0.5s] bg-black/20 h-4 w-[80px] sm:w-[150px] rounded-full" />
      <div className="animate-pulse [animation-delay:0.4s] bg-black/20 h-4 w-[40%] rounded-full" />
      <div className="animate-pulse [animation-delay:0.3s] bg-black/20 h-4 w-1/2 rounded-full" />
    </div>
  );
}
