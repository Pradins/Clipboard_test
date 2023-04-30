# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

To ensure that I was not breaking the functionality of the code first I created all the tests for it and ensured that all the use cases where covered by checking the jest coverage report, not only on lines covered but branches.

first useCase I had to cover was when !event -> return TRIVIAL_PARTITION_KEY
on the second line I simplify the part where the "candidate" is chosen between event.partitionKey or the event value itself. Using the || operator I return the event.partitionKey if exists. If not i return the hash of the event value.

the "if (typeof candidate !== 'string')" cant be simplified and will only enter when event = { partitionKey: [NUMBER] }.

Finally, I just need to check the length of "candidate" and create a hash with it or just return candidate.

Didn't want to change any of the variable names, but I think that it's much more readable and comprehensible like this.
