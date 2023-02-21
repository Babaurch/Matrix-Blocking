function matrixBlocking(A, B, blockSize) {
    const n = A.length;
    const C = new Array(n).fill().map(() => new Array(n).fill(0));
    
    // Divide A and B into sub-matrices 
    const blockNumber = Math.floor(n / blockSize);
    
    // Multiply sub-matrices of A and B in parallel
    for (let i = 0; i < blockNumber; i++) {
      for (let j = 0; j < blockNumber; j++) {
        for (let k = 0; k < blockNumber; k++) {
          for (let ii = i * blockSize; ii < (i + 1) * blockSize; ii++) {
            for (let jj = j * blockSize; jj < (j + 1) * blockSize; jj++) {
              for (let kk = k * blockSize; kk < (k + 1) * blockSize; kk++) {
                C[ii][kk] += A[ii][jj] * B[jj][kk];
              }
            }
          }
        }
      }
    }
    
    return C;
  }
  console.log(matrixBlocking(5,5, 10));
  