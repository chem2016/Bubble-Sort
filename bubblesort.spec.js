describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
  });

  beforeEach(() => {
    let swapCounter = 0;
    let array = [2,1,5,4,3,6,9,99];
  })

  it('has has multiple elments', () => {
    
    expect(typeof tree.insert).toBe('function')
    expect(typeof tree.contains).toBe('function')
    expect(typeof tree.depthFirstForEach).toBe('function')
    expect(typeof tree.breadthFirstForEach).toBe('function')
    expect(typeof tree.size).toBe('function')
  })