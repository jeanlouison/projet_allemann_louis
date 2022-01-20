<?php



use Doctrine\ORM\Mapping as ORM;

/**
 * Client
 *
 * @ORM\Table(name="client")
 * @ORM\Entity
 */
class Client
{
    /**
     * @var int
     *
     * @ORM\Column(name="id_client", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="client_id_client_seq", allocationSize=1, initialValue=1)
     */
    private $id;

    /**
     * @var string|null
     *
     * @ORM\Column(name="username", type="string", length=56, nullable=true)
     */
    private $username;

    /**
     * @var string|null
     *
     * @ORM\Column(name="lastname", type="string", length=56, nullable=true)
     */
    private $lastname;

    /**
     * @var string|null
     *
     * @ORM\Column(name="firstname", type="string", length=56, nullable=true)
     */
    private $firstname;

    /**
     * @var string|null
     *
     * @ORM\Column(name="email", type="string", length=100, nullable=true)
     */
    private $email;

    /**
     * @var string|null
     *
     * @ORM\Column(name="phone", type="string", length=20, nullable=true)
     */
    private $phone;

    /**
     * @var string|null
     *
     * @ORM\Column(name="sex", type="string", length=1, nullable=true)
     */
    private $sex;

    /**
     * @var string|null
     *
     * @ORM\Column(name="password", type="string", length=256, nullable=true)
     */
    private $password;


    /**
     * Get id.
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set username.
     *
     * @param string|null $username
     *
     * @return Client
     */
    public function setUsername($username = null)
    {
        $this->username = $username;

        return $this;
    }

    /**
     * Get username.
     *
     * @return string|null
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * Set lastname.
     *
     * @param string|null $lastname
     *
     * @return Client
     */
    public function setLastname($lastname = null)
    {
        $this->lastname = $lastname;

        return $this;
    }

    /**
     * Get lastname.
     *
     * @return string|null
     */
    public function getLastname()
    {
        return $this->lastname;
    }

    /**
     * Set firstname.
     *
     * @param string|null $firstname
     *
     * @return Client
     */
    public function setFirstname($firstname = null)
    {
        $this->firstname = $firstname;

        return $this;
    }

    /**
     * Get firstname.
     *
     * @return string|null
     */
    public function getFirstname()
    {
        return $this->firstname;
    }

    /**
     * Set email.
     *
     * @param string|null $email
     *
     * @return Client
     */
    public function setEmail($email = null)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get email.
     *
     * @return string|null
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set phone.
     *
     * @param string|null $phone
     *
     * @return Client
     */
    public function setPhone($phone = null)
    {
        $this->phone = $phone;

        return $this;
    }

    /**
     * Get phone.
     *
     * @return string|null
     */
    public function getPhone()
    {
        return $this->phone;
    }

    /**
     * Set sex.
     *
     * @param string|null $sex
     *
     * @return Client
     */
    public function setSex($sex = null)
    {
        $this->sex = $sex;

        return $this;
    }

    /**
     * Get sex.
     *
     * @return string|null
     */
    public function getSex()
    {
        return $this->sex;
    }

    /**
     * Set password.
     *
     * @param string|null $password
     *
     * @return Client
     */
    public function setPassword($password = null)
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Get password.
     *
     * @return string|null
     */
    public function getPassword()
    {
        return $this->password;
    }
}
