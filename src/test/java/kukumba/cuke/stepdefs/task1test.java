package kukumba.cuke.stepdefs;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class task1test {
	
    private static WebDriver driver;
    
	@Before
	public void init() {
        System.setProperty("webdriver.chrome.driver", "src/test/resources/selenium/driver/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.manage().window().setSize(new Dimension(1366, 768));
	}
	
	@Given("^I am on the add user page$")
	public void i_am_on_the_add_user_page() throws Throwable {
		driver.get("http://thedemosite.co.uk/addauser.php");
		
        assertEquals("Add a user - FREE PHP code and SQL", driver.getTitle());
	}
	
	@When("^I enter a \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_enter_a_and(String arg1, String arg2) throws Throwable {
		Thread.sleep(2500);
		WebElement username = driver.findElement(By.name("username"));
		username.sendKeys(arg1);
		Thread.sleep(2500);
		WebElement password = driver.findElement(By.name("password"));
		password.sendKeys(arg2);
		Thread.sleep(2500);
		
		driver.findElement(By.xpath("/html/body/table/tbody/tr/td[1]/form/div/center/table/tbody/tr/td[1]/div/center/table/tbody/tr[3]/td[2]/p/input")).click();
		String text = driver.findElement(By.xpath("/html/body/table/tbody/tr/td[1]/blockquote/blockquote[2]/blockquote")).getText();
		
		assertEquals("The username: " + arg1 + "\n" + "The password: " + arg2, text);
	}
	
	@When("^I navigate to the login page$")
	public void i_navigate_to_the_login_page() throws Throwable {
		driver.get("http://thedemosite.co.uk/login.php");
		
        assertEquals("Login example page to test the PHP MySQL online system", driver.getTitle());
	}

	@When("^I enter my \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_enter_my_and(String arg1, String arg2) throws Throwable {
		Thread.sleep(2500);
		WebElement username = driver.findElement(By.name("username"));
		username.sendKeys(arg1);
		Thread.sleep(2500);
		WebElement password = driver.findElement(By.name("password"));
		password.sendKeys(arg2);
		Thread.sleep(2500);
		
        assertEquals(arg1, username.getAttribute("value"));
        assertEquals(arg2, password.getAttribute("value"));
	}

	@Then("^I will be logged in$")
	public void i_will_be_logged_in() throws Throwable {
		driver.findElement(By.xpath("/html/body/table/tbody/tr/td[1]/form/div/center/table/tbody/tr/td[1]/table/tbody/tr[3]/td[2]/p/input")).click();
		Thread.sleep(2500);
		assertEquals("**Successful Login**", driver.findElement(By.xpath("/html/body/table/tbody/tr/td[1]/big/blockquote/blockquote/font/center")).getText());
	}
	
	@After
	public void fin() {
		driver.close();
	}

}
