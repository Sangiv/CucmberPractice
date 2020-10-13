package kukumba.cuke.stepdefs;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.util.HashMap;
import java.util.Map;
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

public class googletest {
	
    private static WebDriver driver;
    
    // Designed to return ChromeOptions to configure new ChromeDrivers in Selenium
    public static ChromeOptions chromeCfg() {
     Map<String, Object> prefs = new HashMap<String, Object>();
     ChromeOptions cOptions = new ChromeOptions();
      
     // Settings
     prefs.put("profile.default_content_setting_values.cookies", 2);
     prefs.put("network.cookie.cookieBehavior", 2);
     prefs.put("profile.block_third_party_cookies", true);

     // Create ChromeOptions to disable Cookies pop-up
     cOptions.setExperimentalOption("prefs", prefs);

     return cOptions;
     }
	
	@Before
	public void init() {
        System.setProperty("webdriver.chrome.driver", "src/test/resources/selenium/driver/chromedriver.exe");
//        driver = new ChromeDriver();
        driver = new ChromeDriver( chromeCfg() );
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.manage().window().setSize(new Dimension(1366, 768));
	}
	
	@Given("^We open google$")
	public void we_can_open_google() throws Throwable {
		driver.get("https://google.com");
		
        assertEquals("Google", driver.getTitle());
	}

	@When("^I search for \"([^\"]*)\"$")
	public void i_search_for(String arg1) throws Throwable {
		driver.get("https://google.com");
		
        WebElement searchBar = driver.findElement(By.name("q"));
        String searchTerm = arg1;
        searchBar.sendKeys(searchTerm);
        
        assertEquals(searchTerm, searchBar.getAttribute("value"));
	}

	@Then("^Google will return us images of \"([^\"]*)\"$")
	public void google_will_return_us_images_of(String arg1) throws Throwable {
		driver.get("https://google.com");
		
        WebElement searchBar = driver.findElement(By.name("q"));
        String searchTerm = arg1;
        searchBar.sendKeys(searchTerm);
        searchBar.submit();
        Thread.sleep(2500);
        driver.findElement(By.xpath("//*[@id=\"hdtb-msb-vis\"]/div[2]/a")).click();

        Thread.sleep(2500);
        assertTrue(driver.findElement(By.xpath("//*[@id=\"islrg\"]/div[1]/div[1]/a[1]/div[1]/img")).isDisplayed());
	}
	
	
	@After
	public void fin() {
		driver.close();
	}
	
}
