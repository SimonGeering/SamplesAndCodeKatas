using NUnit.Framework;

namespace CodeWars
{
    public static class Kata
    {
        public static int DescendingOrder(int num)
        {
            // Bust a move right here
            return 0;
        }
    }
    
    [TestFixture]
    public class Tests
    {
        [Test]
        public void Test0()
        {
            Assert.AreEqual(0, Kata.DescendingOrder(0));
        }
    }
}