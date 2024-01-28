class Car{
    static numberOfTires = 4
    static numberOfDoors = 4

    startEngine(){
        console.log("The engine is on")
    }
    stopEngine(){
        console.log("The engine is off")
    }
}
const car = new Car()

car.startEngine()
car.stopEngine()


// Descriptive Statistics Class
class StudentScore {
    constructor(data) {
      this.data = data;
    }
  
    getMean() {
      const sum = this.data.reduce((acc, val) => acc + val, 0);
      return sum / this.data.length;
    }
  
    getMedian() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      const middle = Math.floor(sortedData.length / 2);
  
      if (sortedData.length % 2 === 0) {
        return (sortedData[middle - 1] + sortedData[middle]) / 2;
      } else {
        return sortedData[middle];
      }
    }
  
    getMode() {
      const frequencyMap = {};
      for (const value of this.data) {
        frequencyMap[value] = (frequencyMap[value] || 0) + 1;
      }
  
      let mode;
      let maxFrequency = 0;
  
      for (const value in frequencyMap) {
        if (frequencyMap[value] > maxFrequency) {
          maxFrequency = frequencyMap[value];
          mode = Number(value);
        }
      }
  
      return mode;
    }
  
    getRange() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      return sortedData[sortedData.length - 1] - sortedData[0];
    }
}
  
//Use Cases
const data = [2, 5, 7, 10, 9, 3, 8, 4, 6, 1];

const stats = new StudentScore(data);

console.log('Mean:', stats.getMean());
console.log('Median:', stats.getMedian());
console.log('Mode:', stats.getMode());
console.log('Range:', stats.getRange());