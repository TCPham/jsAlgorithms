"""
- Visualization with playing cards (scroll down):
      https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
  - Array / bar visualization:
      https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/

  - Stable sort, efficient for small data sets or mostly sorted data sets.

  Time Complexity
    - Best: O(n) linear when array is already sorted.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic when the array is reverse sorted.

  Space: O(1) constant.

  - this sort splits the array into two portions (conceptually, not literally).
  - the left portion will become sorted, the right portion
      (that hasn't been iterated over yet) is unsorted.

  can shift OR swap target element until it reaches desired position
  shifting steps:
  1. consider the first item as sorted
  2. move to the next item
  3. store current item in a temp var (to make this position available to shift items)
  4. if item to the left of current is greater than current item, shift the
      left item to the right.
  5. repeat step 4 as many times as needed
  6. insert current item
  7. move to the next item and repeat

  swap steps:
  1. consider the first item as sorted
  2. move to the next item
  4. if item to left of current item is less than current, swap
  5. repeat step 4 until item to left is less than current item
  6. move to next item and repeat
"""


def insertion_sort(numbers):
    """
    Sorts the given list in-place using the insertion sort algorithm.

    Parameters:
    numbers (list): The list of numbers to be sorted.

    Returns:
    list: The sorted list.
    """

    # your code here
    if len(numbers) < 1:  # edge cases for if list is empty or only has one value
        return None
    if len(numbers) == 1:
        return numbers

    for i in range(1, len(numbers)):  # Starts with second element
        currValue = numbers[i]
        preIdx = i - 1

        # While loop continues shifting elements to the right so long as
        # preIdx value is larger than currValue
        # currValue is placed in list at spot in front of the value at
        # preIdx that is smaller than currValue
        while preIdx >= 0 and currValue < numbers[preIdx]:
            numbers[preIdx + 1] = numbers[preIdx]  # shifts elements to the right
            preIdx -= 1
            numbers[preIdx + 1] = currValue

    return numbers


# Test cases
# numbers_ordered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers_random_order = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8]
# numbers_reversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

print(insertion_sort(numbers_ordered) == expected)
print(insertion_sort(numbers_random_order) == expected)
print(insertion_sort(numbers_reversed) == expected)
