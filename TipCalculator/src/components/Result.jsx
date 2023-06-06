import React from 'react'

function Result({ total , perperson}) {
  function reset(){
    window.location.reload();
  }
  return (
    <>
      <div class="results">
          <div class="results__text-box">
            <div class="results__text">
              <p>
                Tip Amount<span class="results__text-accent">/ person</span>
              </p>
              <p class="results__text-money">
                $<span id="tip_amount">{perperson}</span>
              </p>
            </div>
            <div class="results__text">
              <p>Total<span class="results__text-accent">/ person</span></p>
              <p class="results__text-money">
                $<span id="total_amount">{total}</span>
              </p>
            </div>
          </div>
          <button class="reset" onClick={reset}>Reset</button>
        </div>

    </>
  )
}

export default Result