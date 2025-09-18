export function FeaturedMatch() {
  return (
    <div className="relative bg-gradient-to-r from-red-800 to-red-900 rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative p-6 text-white">
        <div className="flex items-center justify-center mb-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <div className="text-xs opacity-80">FIFA WORLD CUP</div>
            <div className="text-xs opacity-80">QATAR 2022</div>
          </div>
        </div>

        <div className="text-center mb-6">
          <h2 className="text-xl font-bold mb-1">England vs Germany</h2>
          <p className="text-sm opacity-80">Sunday, 21 January 2022</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/england-player.png" alt="England Player" className="w-15 h-20 object-cover rounded" />
            <div className="text-center">
              <div className="text-2xl font-bold">03</div>
              <div className="text-xs opacity-80">Goals</div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex items-center gap-2 text-2xl font-bold">
              <span>12</span>
              <span>:</span>
              <span>43</span>
              <span>:</span>
              <span>14</span>
            </div>
            <div className="flex gap-2 text-xs opacity-80">
              <span>Hours</span>
              <span>Minutes</span>
              <span>Seconds</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">14</div>
              <div className="text-xs opacity-80">Goals</div>
            </div>
            <img src="/germany-player.png" alt="Germany Player" className="w-15 h-20 object-cover rounded" />
          </div>
        </div>
      </div>
    </div>
  )
}
