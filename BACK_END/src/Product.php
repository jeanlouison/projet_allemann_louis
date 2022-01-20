<?php



use Doctrine\ORM\Mapping as ORM;

/**
 * Product
 *
 * @ORM\Table(name="product")
 * @ORM\Entity
 */
class Product
{
    /**
     * @var int
     *
     * @ORM\Column(name="id_product", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="product_id_product_seq", allocationSize=1, initialValue=1)
     */
    private $id;

    /**
     * @var string|null
     *
     * @ORM\Column(name="ref", type="string", length=100, nullable=true)
     */
    private $ref;

    /**
     * @var string|null
     *
     * @ORM\Column(name="libelle", type="string", length=100, nullable=true)
     */
    private $libelle;

    /**
     * @var float|null
     *
     * @ORM\Column(name="prix", type="float", nullable=true)
     */
    private $prix;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="gamepass", type="boolean", nullable=true)
     */
    private $gamepass;

    /**
     * @var string|null
     *
     * @ORM\Column(name="image", type="string", length=300, nullable=true)
     */
    private $image;


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
     * Set ref.
     *
     * @param string|null $ref
     *
     * @return Product
     */
    public function setRef($ref = null)
    {
        $this->ref = $ref;

        return $this;
    }

    /**
     * Get ref.
     *
     * @return string|null
     */
    public function getRef()
    {
        return $this->ref;
    }

    /**
     * Set libelle.
     *
     * @param string|null $libelle
     *
     * @return Product
     */
    public function setLibelle($libelle = null)
    {
        $this->libelle = $libelle;

        return $this;
    }

    /**
     * Get libelle.
     *
     * @return string|null
     */
    public function getLibelle()
    {
        return $this->libelle;
    }

    /**
     * Set prix.
     *
     * @param float|null $prix
     *
     * @return Product
     */
    public function setPrix($prix = null)
    {
        $this->prix = $prix;

        return $this;
    }

    /**
     * Get prix.
     *
     * @return float|null
     */
    public function getPrix()
    {
        return $this->prix;
    }

    /**
     * Set gamepass.
     *
     * @param bool|null $gamepass
     *
     * @return Product
     */
    public function setGamepass($gamepass = null)
    {
        $this->gamepass = $gamepass;

        return $this;
    }

    /**
     * Get gamepass.
     *
     * @return bool|null
     */
    public function getGamepass()
    {
        return $this->gamepass;
    }

    /**
     * Set image.
     *
     * @param string|null $image
     *
     * @return Product
     */
    public function setImage($image = null)
    {
        $this->image = $image;

        return $this;
    }

    /**
     * Get image.
     *
     * @return string|null
     */
    public function getImage()
    {
        return $this->image;
    }
}
