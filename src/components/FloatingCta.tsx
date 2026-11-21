import { Send } from 'lucide-react'
import { pop } from '../sakuga'

// White pill with a round sky button, after volz.app's floating "Book your flight".
export default function FloatingCta({ visible }: { visible: boolean }) {
  return (
    <a
      href="#contact"
      inert={!visible}
      onClick={(e) => pop(e.currentTarget, 'pon')}
      className={`group fixed bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-4 rounded-full bg-white py-1.5 pl-6 pr-1.5 text-base font-bold text-navy shadow-float transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none sm:bottom-7 ${
        visible ? 'opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      Let&rsquo;s talk
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-soft text-white transition-transform duration-500 group-hover:rotate-[20deg] group-hover:scale-110">
        <Send aria-hidden="true" size={18} strokeWidth={2} />
      </span>
    </a>
  )
}
