import './styles.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Courses from '../Courses/index'

function Home() {
  return (
    <div class="nicdark_site nicdark_bg_white nicdark_front_page ">
      <div class="nd_options_display_table nd_options_transition_all_08_ease nd_options_navigation_search_content nd_options_bg_greydark_alpha_9 nd_options_position_fixed nd_options_width_100_percentage nd_options_height_100_percentage nd_options_z_index_1_negative nd_options_opacity_0">
        <div class="nd_options_cursor_zoom_out nd_options_navigation_close_search_content nd_options_width_100_percentage nd_options_height_100_percentage nd_options_position_absolute nd_options_z_index_1_negative">

        </div>


        <div class="nd_options_display_table_cell nd_options_vertical_align_middle nd_options_text_align_center">


          <form class="nd_options_navigation_search_content_form" method="get" action="http://www.nicdarkthemes.com/themes/education/wp/demo/university/">
            <input class="nd_options_first_font" type="search" placeholder="Keyword" value="" name="s" />
            <input class="" type="submit" value="Search" />
          </form>


        </div>

      </div>
      <div class="nd_options_display_table nd_options_transition_all_08_ease nd_options_navigation_search_content nd_options_bg_greydark_alpha_9 nd_options_position_fixed nd_options_width_100_percentage nd_options_height_100_percentage nd_options_z_index_1_negative nd_options_opacity_0">

        <div
          class="nd_options_cursor_zoom_out nd_options_navigation_close_search_content nd_options_width_100_percentage nd_options_height_100_percentage nd_options_position_absolute nd_options_z_index_1_negative">
        </div>


        <div class="nd_options_display_table_cell nd_options_vertical_align_middle nd_options_text_align_center">


          <form class="nd_options_navigation_search_content_form" method="get"
            action="http://www.nicdarkthemes.com/themes/education/wp/demo/university/">
            <input class="nd_options_first_font" type="search" placeholder="Keyword" value="" name="s" />
            <input class="" type="submit" value="Search" />
          </form>


        </div>

      </div>
      <div style={{ backgroundColor: "#174873" }}
        class="nd_options_navigation_2_sidebar_content nd_options_padding_40 nd_options_box_sizing_border_box nd_options_overflow_hidden nd_options_overflow_y_auto nd_options_transition_all_08_ease nd_options_height_100_percentage nd_options_position_fixed nd_options_width_300 nd_options_right_300_negative nd_options_z_index_999">

        <img alt="" width="25"
          class="nd_options_close_navigation_2_sidebar_content nd_options_cursor_pointer nd_options_right_20 nd_options_top_20 nd_options_position_absolute"
          src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/addons/customizer/header/header-2/img/icon-close-white.svg" />

        <div class="nd_options_navigation_2 nd_options_navigation_type nd_options_text_align_right nd_options_float_right nd_options_display_none_all_responsive">
          <div class="menu-main-menu-container">
            {/* <Router> */}
              <ul id="menu-main-menu" class="menu">
                <li id="menu-item-864"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-204 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-864">
                  <a href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/"
                  aria-current="page">HOME</a>
                  {/* <li>
                    <Link to="/" component={Home}>Home</Link>
                  </li> */}
                  <ul class="sub-menu">
                    <li id="menu-item-979"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-204 current_page_item menu-item-979">
                      <a href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/"
                        aria-current="page">Home 1</a></li>
                    <li id="menu-item-970"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-970"><a
                        href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/home-2/">Home
                                        2</a></li>
                    <li id="menu-item-969"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-969"><a
                        href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/home-3/">Home
                                        3</a></li>
                    <li id="menu-item-968"
                      class="nd_options_new_label menu-item menu-item-type-post_type menu-item-object-page menu-item-968">
                      <a href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/home-4/">Home
                                        4</a></li>
                    <li id="menu-item-971"
                      class="nd_options_new_label menu-item menu-item-type-post_type menu-item-object-page menu-item-971">
                      <a href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/home/">Home
                                        5</a></li>
                    <li id="menu-item-1178"
                      class="nd_options_bg_grey_important menu-item menu-item-type-custom menu-item-object-custom menu-item-1178">
                      <a target="_blank" rel="noopener noreferrer"
                        href="http://www.nicdarkthemes.com/themes/education/wp/demo/slides/">50 + SLIDES
                                        INCL.</a></li>
                  </ul>
                </li>
                <li id="menu-item-799"
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-799">
                  <a
                  href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/?nd_learning_arrive_from_advsearch=true&#038;post_tag=&#038;difficulty-level-course=&#038;category-course=&#038;location-course=&#038;typology-course=&#038;duration-course=">COURSES</a>
                  {/* <li>
                    <Link to="/courses" component={Courses}>COURSES</Link>
                  </li> */}
                  <ul class="sub-menu">
                    <li id="menu-item-918"
                      class="nd_options_best_label menu-item menu-item-type-custom menu-item-object-custom menu-item-918">
                      <a
                        href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/?nd_learning_arrive_from_advsearch=true&#038;post_tag=&#038;difficulty-level-course=&#038;category-course=&#038;location-course=&#038;typology-course=&#038;duration-course=">Search</a>
                    </li>
                    <li id="menu-item-915"
                      class="menu-item menu-item-type-post_type menu-item-object-courses menu-item-has-children menu-item-915">
                      <a
                        href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/contemporary-art/">Single
                                        Course</a>
                      <ul class="sub-menu">
                        <li id="menu-item-1027"
                          class="nd_options_hot_label menu-item menu-item-type-post_type menu-item-object-courses menu-item-1027">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/contemporary-art/">Free
                                                Course</a></li>
                        <li id="menu-item-1028"
                          class="menu-item menu-item-type-post_type menu-item-object-courses menu-item-1028">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/biology-course/">Paid
                                                Course</a></li>
                        <li id="menu-item-1026"
                          class="menu-item menu-item-type-post_type menu-item-object-courses menu-item-1026">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/live-drawing/">Completed
                                                Course</a></li>
                      </ul>
                    </li>
                    <li id="menu-item-1144"
                      class="nd_options_new_label menu-item menu-item-type-post_type menu-item-object-product menu-item-1144">
                      <a
                        href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/product/construction-systems/">Online
                                        Course</a></li>
                    <li id="menu-item-1025"
                      class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1025">
                      <a href="#">Features</a>
                      <ul class="sub-menu">
                        <li id="menu-item-1033"
                          class="nd_options_new_label menu-item menu-item-type-custom menu-item-object-custom menu-item-1033">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/contemporary-art/#nd_learning_single_course_attendees">Attendees</a>
                        </li>
                        <li id="menu-item-1035"
                          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1035">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/biology-course/#nd_learning_single_course_reviews">Public
                                                Reviews</a></li>
                        <li id="menu-item-1031"
                          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1031">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/learning-account/#nd_learning_account_page_tab_bookmark">Bookmark
                                                Courses</a></li>
                        <li id="menu-item-1032"
                          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1032">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/learning-account/#nd_learning_account_page_tab_compare">Compare
                                                Courses</a></li>
                        <li id="menu-item-1034"
                          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1034">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/elizabethan-theater/#nd_learning_single_course_documents">Documents</a>
                        </li>
                      </ul>
                    </li>
                    <li id="menu-item-941"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-941">
                      <a
                        href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/archive-courses-1/">Layout</a>
                      <ul class="sub-menu">
                        <li id="menu-item-945"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-945">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/archive-courses-1/">Layout
                                                1</a></li>
                        <li id="menu-item-944"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-944">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/archive-courses-2/">Layout
                                                2</a></li>
                        <li id="menu-item-943"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-943">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/archive-courses-3/">Layout
                                                3</a></li>
                        <li id="menu-item-942"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-942">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/archive-courses-4/">Layout
                                                4</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li id="menu-item-807"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-807">
                  <a
                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/teachers-archive/">TEACHERS</a>
                  <ul class="sub-menu">
                    <li id="menu-item-919"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-919"><a
                        href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/teachers-archive/">Archive</a>
                    </li>
                    <li id="menu-item-917"
                      class="nd_options_hot_label menu-item menu-item-type-post_type menu-item-object-teachers menu-item-917">
                      <a
                        href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/teachers/jane-taylor/">Single
                                        Teacher</a></li>
                    <li id="menu-item-1037"
                      class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1037">
                      <a href="#">Features</a>
                      <ul class="sub-menu">
                        <li id="menu-item-1038"
                          class="nd_options_new_label menu-item menu-item-type-custom menu-item-object-custom menu-item-1038">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/teachers/mandy-jackson/#nd_learning_single_teacher_followers">Follower</a>
                        </li>
                        <li id="menu-item-1039"
                          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1039">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/teachers/kaylin-moore/#nd_learning_single_teacher_reviews">Public
                                                Reviews</a></li>
                        <li id="menu-item-1040"
                          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1040">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/teachers/john-brown/#nd_learning_single_teacher_contact_form">Custom
                                                Form</a></li>
                      </ul>
                    </li>
                    <li id="menu-item-1054"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1054">
                      <a
                        href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/archive-teachers-1/">Layout</a>
                      <ul class="sub-menu">
                        <li id="menu-item-1055"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1055">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/archive-teachers-1/">Layout
                                                1</a></li>
                        <li id="menu-item-1053"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1053">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/archive-teachers-2/">Layout
                                                2</a></li>
                        <li id="menu-item-1052"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1052">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/archive-teachers-3/">Layout
                                                3</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li id="menu-item-1142"
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1142">
                  <a href="#">SHOP</a>
                  <ul class="sub-menu">
                    <li id="menu-item-1141"
                      class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-1141">
                      <a
                        href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/product-category/online-courses/">Online
                                        Courses</a>
                      <ul class="sub-menu">
                        <li id="menu-item-1151"
                          class="nd_options_best_label menu-item menu-item-type-post_type menu-item-object-page menu-item-1151">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/shop-right-sidebar/">Right
                                                Sidebar</a></li>
                        <li id="menu-item-1150"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1150">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/shop-left-sidebar/">Left
                                                Sidebar</a></li>
                        <li id="menu-item-1152"
                          class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-1152">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/product-category/online-courses/">Full
                                                Width</a></li>
                      </ul>
                    </li>
                    <li id="menu-item-1168"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1168">
                      <a
                        href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/products-right-sidebar/">Products</a>
                      <ul class="sub-menu">
                        <li id="menu-item-1165"
                          class="nd_options_best_label menu-item menu-item-type-post_type menu-item-object-page menu-item-1165">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/products-right-sidebar/">Right
                                                Sidebar</a></li>
                        <li id="menu-item-1164"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1164">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/products-left-sidebar/">Left
                                                Sidebar</a></li>
                        <li id="menu-item-1166"
                          class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-1166">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/product-category/products/">Full
                                                Width</a></li>
                      </ul>
                    </li>
                    <li id="menu-item-1139"
                      class="menu-item menu-item-type-post_type menu-item-object-product menu-item-has-children menu-item-1139">
                      <a
                        href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/product/construction-systems/">Single
                                        Product</a>
                      <ul class="sub-menu">
                        <li id="menu-item-1137"
                          class="menu-item menu-item-type-post_type menu-item-object-product menu-item-1137">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/product/construction-systems/">Online
                                                Course</a></li>
                        <li id="menu-item-1138"
                          class="menu-item menu-item-type-post_type menu-item-object-product menu-item-1138">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/product/black-click-ball-pen/">Product</a>
                        </li>
                      </ul>
                    </li>
                    <li id="menu-item-1096"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1096"><a
                        href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/cart/">Cart</a>
                    </li>
                    <li id="menu-item-1095"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1095"><a
                        href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/checkout/">Checkout</a>
                    </li>
                  </ul>
                </li>
                <li id="menu-item-803"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-803">
                  <a
                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/about-us/">PAGES</a>
                  <ul class="sub-menu">
                    <li id="menu-item-804"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-804"><a
                        href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/about-us/">About
                                        Us</a></li>
                    <li id="menu-item-805"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-805"><a
                        href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/services/">Services</a>
                    </li>
                    <li id="menu-item-1006"
                      class="menu-item menu-item-type-post_type menu-item-object-courses menu-item-1006">
                      <a
                        href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/contemporary-art/">Course</a>
                    </li>
                    <li id="menu-item-1007"
                      class="menu-item menu-item-type-post_type menu-item-object-teachers menu-item-1007">
                      <a
                        href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/teachers/jane-taylor/">Teacher</a>
                    </li>
                    <li id="menu-item-1036"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1036"><a
                        href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/learning-account/">My
                                        Account</a></li>
                  </ul>
                </li>
                <li id="menu-item-814"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-814">
                  <a
                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/blog-masonry-full-width/">BLOG</a>
                  <ul class="sub-menu">
                    <li id="menu-item-812"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-812">
                      <a
                        href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/blog-masonry-full-width/">Masonry</a>
                      <ul class="sub-menu">
                        <li id="menu-item-1005"
                          class="nd_options_best_label menu-item menu-item-type-post_type menu-item-object-page menu-item-1005">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/blog-masonry-full-width/">Full
                                                Width</a></li>
                        <li id="menu-item-1004"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1004">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/blog-masonry-right-sidebar/">Right
                                                Sidebar</a></li>
                        <li id="menu-item-1003"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1003">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/blog-masonry-left-sidebar/">Left
                                                Sidebar</a></li>
                      </ul>
                    </li>
                    <li id="menu-item-994"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-994">
                      <a
                        href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/blog-standard-right-sidebar/">Standard</a>
                      <ul class="sub-menu">
                        <li id="menu-item-996"
                          class="nd_options_best_label menu-item menu-item-type-post_type menu-item-object-page menu-item-996">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/blog-standard-right-sidebar/">Right
                                                Sidebar</a></li>
                        <li id="menu-item-995"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-995">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/blog-standard-left-sidebar/">Left
                                                Sidebar</a></li>
                      </ul>
                    </li>
                    <li id="menu-item-909"
                      class="menu-item menu-item-type-post_type menu-item-object-post menu-item-has-children menu-item-909">
                      <a
                        href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/our-library/">Single
                                        Post</a>
                      <ul class="sub-menu">
                        <li id="menu-item-811"
                          class="menu-item menu-item-type-post_type menu-item-object-post menu-item-811">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/new-website/">Right
                                                Sidebar</a></li>
                        <li id="menu-item-810"
                          class="menu-item menu-item-type-post_type menu-item-object-post menu-item-810">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/course-registration/">Left
                                                Sidebar</a></li>
                        <li id="menu-item-813"
                          class="menu-item menu-item-type-post_type menu-item-object-post menu-item-813">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/our-library/">Full
                                                width</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li id="menu-item-806"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-806"><a
                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/contact/">CONTACT</a>
                </li>
              </ul>
              {/* <Switch>
                <Route path="/courses">
                  <Courses />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch> */}
            {/* </Router> */}
          </div>

        </div>
      </div>
      <div class="nd_options_section">

        <div style={{ backgroundColor: "#174873" }} class="nd_options_section">

          <div class="nd_options_container nd_options_clearfix">

            <div style={{ color: " #ffffff" }}
              class="nd_options_grid_6 nd_options_padding_botttom_10 nd_options_padding_bottom_0_responsive nd_options_padding_top_10 nd_options_text_align_center_responsive">
              <div id="nd_options_navigation_top_header_2_left"
                class="nd_options_navigation_top_header_2 nd_options_display_inline_block_responsive">


                <div
                  class=" nd_options_display_none_all_iphone nd_options_display_table nd_options_float_left">


                  <div class="nd_options_display_table_cell nd_options_vertical_align_middle    ">
                    <a href=""><img alt="" width="15" height="15"
                      class="nd_options_margin_right_10 nd_options_float_left"
                      src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/addons/customizer/shortcodes/top-header/img/world-white.svg" /></a>
                  </div>




                  <div class="nd_options_display_table_cell nd_options_vertical_align_middle    ">
                    <a style={{ color: " #fff" }} class="nd_options_margin_right_20" href="">LANGUAGES</a>
                  </div>


                </div>



                <div class="  nd_options_display_table nd_options_float_left">



                  <div class="nd_options_display_table_cell nd_options_vertical_align_middle    ">
                    <a style={{ color: " #fff" }} class="nd_options_margin_right_20" href="">EN</a>
                  </div>


                </div>



                <div class="  nd_options_display_table nd_options_float_left">



                  <div class="nd_options_display_table_cell nd_options_vertical_align_middle    ">
                    <a style={{ color: " #fff" }} class="nd_options_margin_right_20" href="">ES</a>
                  </div>


                </div>



                <div
                  class=" nd_options_display_none_all_iphone nd_options_display_table nd_options_float_left">


                  <div class="nd_options_display_table_cell nd_options_vertical_align_middle    ">
                    <a href=""><img alt="" width="15" height="15"
                      class="nd_options_margin_right_10 nd_options_float_left"
                      src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/addons/customizer/shortcodes/top-header/img/share-white.svg" /></a>
                  </div>




                  <div class="nd_options_display_table_cell nd_options_vertical_align_middle    ">
                    <a style={{ color: " #fff" }} class="nd_options_margin_right_20" href="">OUR SOCIAL</a>
                  </div>


                </div>



                <div class="  nd_options_display_table nd_options_float_left">


                  <div class="nd_options_display_table_cell nd_options_vertical_align_middle    ">
                    <a href=""><img alt="" width="15" height="15"
                      class="nd_options_margin_right_10 nd_options_float_left"
                      src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/addons/customizer/shortcodes/top-header/img/facebook-white.svg" /></a>
                  </div>



                </div>



                <div class="  nd_options_display_table nd_options_float_left">


                  <div class="nd_options_display_table_cell nd_options_vertical_align_middle    ">
                    <a href=""><img alt="" width="15" height="15"
                      class="nd_options_margin_right_10 nd_options_float_left"
                      src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/addons/customizer/shortcodes/top-header/img/twitter-white.svg" /></a>
                  </div>



                </div>



                <div class="  nd_options_display_table nd_options_float_left">


                  <div class="nd_options_display_table_cell nd_options_vertical_align_middle    ">
                    <a href=""><img alt="" width="15" height="15"
                      class="nd_options_margin_right_10 nd_options_float_left"
                      src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/addons/customizer/shortcodes/top-header/img/linkedin-white.svg" /></a>
                  </div>



                </div>



                <div class="  nd_options_display_table nd_options_float_left">


                  <div class="nd_options_display_table_cell nd_options_vertical_align_middle    ">
                    <a href=""><img alt="" width="15" height="15"
                      class="nd_options_margin_right_10 nd_options_float_left"
                      src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/addons/customizer/shortcodes/top-header/img/pinterest-white.svg" /></a>
                  </div>



                </div>

              </div>
            </div>

            <div style={{ color: "#ffffff" }}
              class="nd_options_grid_6 nd_options_text_align_right nd_options_text_align_center_responsive nd_options_padding_top_0_responsive nd_options_padding_botttom_10 nd_options_padding_top_10">
              <div id="nd_options_navigation_top_header_2_right"
                class="nd_options_navigation_top_header_2 nd_options_display_inline_block_responsive">


                <div class="  nd_options_display_table nd_options_float_right">


                  <div class="nd_options_display_table_cell nd_options_vertical_align_middle    ">
                    <a
                      href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/learning-account/"><img
                        alt="" width="15" height="15"
                        class="nd_options_margin_left_20 nd_options_float_left"
                        src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/addons/customizer/shortcodes/top-header/img/login-white.svg" /></a>
                  </div>




                  <div class="nd_options_display_table_cell nd_options_vertical_align_middle    ">
                    <a style={{ color: " #fff" }} class="nd_options_margin_left_10"
                      href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/learning-account/">REGISTER</a>
                  </div>


                </div>



                <div class="  nd_options_display_table nd_options_float_right">


                  <div class="nd_options_display_table_cell nd_options_vertical_align_middle    ">
                    <a
                      href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/learning-account/"><img
                        alt="" width="15" height="15"
                        class="nd_options_margin_left_20 nd_options_float_left"
                        src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/addons/customizer/shortcodes/top-header/img/user-white.svg" /></a>
                  </div>




                  <div class="nd_options_display_table_cell nd_options_vertical_align_middle    ">
                    <a style={{ color: " #fff" }} class="nd_options_margin_left_10"
                      href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/learning-account/">LOGIN</a>
                  </div>


                </div>


              </div>
            </div>

          </div>

        </div>

      </div>
      <div id="nd_options_navigation_2_container" class="nd_options_section nd_options_position_relative ">

        <div style={{ backgroundColor: '#ffffff', borderBottom: ' 1px solid #f1f1f1' }} class="nd_options_section">

          <div class="nd_options_container nd_options_clearfix nd_options_position_relative">

            <div class="nd_options_grid_12 nd_options_display_none_all_responsive">

              <div style={{ height: "10px" }} class="nd_options_section"></div>

              <a href="http://www.nicdarkthemes.com/themes/education/wp/demo/university"><img
                style={{ top: "24px" }} alt="" class="nd_options_position_absolute nd_options_left_15"
                width="170"
                src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/08/logo-university.png" /></a>

              <div
                class="nd_options_navigation_2 nd_options_navigation_type nd_options_text_align_right nd_options_float_right nd_options_display_none_all_responsive">

                <div class="nd_options_display_table">
                  <div class="nd_options_display_table_cell nd_options_vertical_align_middle">
                    <div class="menu-main-menu-container">
                      <ul id="menu-main-menu-1" class="menu">
                        <li
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-204 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-864">
                          <a href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/"
                            aria-current="page">HOME</a>
                          <ul class="sub-menu">
                            <li
                              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-204 current_page_item menu-item-979">
                              <a href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/"
                                aria-current="page">Home 1</a></li>
                            <li
                              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-970">
                              <a
                                href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/home-2/">Home
                                                2</a></li>
                            <li
                              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-969">
                              <a
                                href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/home-3/">Home
                                                3</a></li>
                            <li
                              class="nd_options_new_label menu-item menu-item-type-post_type menu-item-object-page menu-item-968">
                              <a
                                href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/home-4/">Home
                                                4</a></li>
                            <li
                              class="nd_options_new_label menu-item menu-item-type-post_type menu-item-object-page menu-item-971">
                              <a
                                href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/home/">Home
                                                5</a></li>
                            <li
                              class="nd_options_bg_grey_important menu-item menu-item-type-custom menu-item-object-custom menu-item-1178">
                              <a target="_blank" rel="noopener noreferrer"
                                href="http://www.nicdarkthemes.com/themes/education/wp/demo/slides/">50
                                                + SLIDES INCL.</a></li>
                          </ul>
                        </li>
                        <li
                          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-799">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/?nd_learning_arrive_from_advsearch=true&#038;post_tag=&#038;difficulty-level-course=&#038;category-course=&#038;location-course=&#038;typology-course=&#038;duration-course=">COURSES</a>
                          <ul class="sub-menu">
                            <li
                              class="nd_options_best_label menu-item menu-item-type-custom menu-item-object-custom menu-item-918">
                              <a
                                href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/?nd_learning_arrive_from_advsearch=true&#038;post_tag=&#038;difficulty-level-course=&#038;category-course=&#038;location-course=&#038;typology-course=&#038;duration-course=">Search</a>
                            </li>
                            <li
                              class="menu-item menu-item-type-post_type menu-item-object-courses menu-item-has-children menu-item-915">
                              <a
                                href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/contemporary-art/">Single
                                                Course</a>
                              <ul class="sub-menu">
                                <li
                                  class="nd_options_hot_label menu-item menu-item-type-post_type menu-item-object-courses menu-item-1027">
                                  <a
                                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/contemporary-art/">Free
                                                        Course</a></li>
                                <li
                                  class="menu-item menu-item-type-post_type menu-item-object-courses menu-item-1028">
                                  <a
                                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/biology-course/">Paid
                                                        Course</a></li>
                                <li
                                  class="menu-item menu-item-type-post_type menu-item-object-courses menu-item-1026">
                                  <a
                                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/live-drawing/">Completed
                                                        Course</a></li>
                              </ul>
                            </li>
                            <li
                              class="nd_options_new_label menu-item menu-item-type-post_type menu-item-object-product menu-item-1144">
                              <a
                                href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/product/construction-systems/">Online
                                                Course</a></li>
                            <li
                              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1025">
                              <a href="#">Features</a>
                              <ul class="sub-menu">
                                <li
                                  class="nd_options_new_label menu-item menu-item-type-custom menu-item-object-custom menu-item-1033">
                                  <a
                                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/contemporary-art/#nd_learning_single_course_attendees">Attendees</a>
                                </li>
                                <li
                                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1035">
                                  <a
                                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/biology-course/#nd_learning_single_course_reviews">Public
                                                        Reviews</a></li>
                                <li
                                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1031">
                                  <a
                                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/learning-account/#nd_learning_account_page_tab_bookmark">Bookmark
                                                        Courses</a></li>
                                <li
                                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1032">
                                  <a
                                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/learning-account/#nd_learning_account_page_tab_compare">Compare
                                                        Courses</a></li>
                                <li
                                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1034">
                                  <a
                                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/elizabethan-theater/#nd_learning_single_course_documents">Documents</a>
                                </li>
                              </ul>
                            </li>
                            <li
                              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-941">
                              <a
                                href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/archive-courses-1/">Layout</a>
                              <ul class="sub-menu">
                                <li
                                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-945">
                                  <a
                                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/archive-courses-1/">Layout
                                                        1</a></li>
                                <li
                                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-944">
                                  <a
                                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/archive-courses-2/">Layout
                                                        2</a></li>
                                <li
                                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-943">
                                  <a
                                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/archive-courses-3/">Layout
                                                        3</a></li>
                                <li
                                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-942">
                                  <a
                                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/archive-courses-4/">Layout
                                                        4</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-807">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/teachers-archive/">TEACHERS</a>
                          <ul class="sub-menu">
                            <li
                              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-919">
                              <a
                                href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/teachers-archive/">Archive</a>
                            </li>
                            <li
                              class="nd_options_hot_label menu-item menu-item-type-post_type menu-item-object-teachers menu-item-917">
                              <a
                                href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/teachers/jane-taylor/">Single
                                                Teacher</a></li>
                            <li
                              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1037">
                              <a href="#">Features</a>
                              <ul class="sub-menu">
                                <li
                                  class="nd_options_new_label menu-item menu-item-type-custom menu-item-object-custom menu-item-1038">
                                  <a
                                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/teachers/mandy-jackson/#nd_learning_single_teacher_followers">Follower</a>
                                </li>
                                <li
                                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1039">
                                  <a
                                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/teachers/kaylin-moore/#nd_learning_single_teacher_reviews">Public
                                                        Reviews</a></li>
                                <li
                                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1040">
                                  <a
                                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/teachers/john-brown/#nd_learning_single_teacher_contact_form">Custom
                                                        Form</a></li>
                              </ul>
                            </li>
                            <li
                              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1054">
                              <a
                                href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/archive-teachers-1/">Layout</a>
                              <ul class="sub-menu">
                                <li
                                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1055">
                                  <a
                                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/archive-teachers-1/">Layout
                                                        1</a></li>
                                <li
                                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1053">
                                  <a
                                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/archive-teachers-2/">Layout
                                                        2</a></li>
                                <li
                                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1052">
                                  <a
                                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/archive-teachers-3/">Layout
                                                        3</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li
                          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1142">
                          <a href="#">SHOP</a>
                          <ul class="sub-menu">
                            <li
                              class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-1141">
                              <a
                                href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/product-category/online-courses/">Online
                                                Courses</a>
                              <ul class="sub-menu">
                                <li
                                  class="nd_options_best_label menu-item menu-item-type-post_type menu-item-object-page menu-item-1151">
                                  <a
                                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/shop-right-sidebar/">Right
                                                        Sidebar</a></li>
                                <li
                                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1150">
                                  <a
                                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/shop-left-sidebar/">Left
                                                        Sidebar</a></li>
                                <li
                                  class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-1152">
                                  <a
                                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/product-category/online-courses/">Full
                                                        Width</a></li>
                              </ul>
                            </li>
                            <li
                              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1168">
                              <a
                                href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/products-right-sidebar/">Products</a>
                              <ul class="sub-menu">
                                <li
                                  class="nd_options_best_label menu-item menu-item-type-post_type menu-item-object-page menu-item-1165">
                                  <a
                                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/products-right-sidebar/">Right
                                                        Sidebar</a></li>
                                <li
                                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1164">
                                  <a
                                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/products-left-sidebar/">Left
                                                        Sidebar</a></li>
                                <li
                                  class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-1166">
                                  <a
                                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/product-category/products/">Full
                                                        Width</a></li>
                              </ul>
                            </li>
                            <li
                              class="menu-item menu-item-type-post_type menu-item-object-product menu-item-has-children menu-item-1139">
                              <a
                                href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/product/construction-systems/">Single
                                                Product</a>
                              <ul class="sub-menu">
                                <li
                                  class="menu-item menu-item-type-post_type menu-item-object-product menu-item-1137">
                                  <a
                                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/product/construction-systems/">Online
                                                        Course</a></li>
                                <li
                                  class="menu-item menu-item-type-post_type menu-item-object-product menu-item-1138">
                                  <a
                                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/product/black-click-ball-pen/">Product</a>
                                </li>
                              </ul>
                            </li>
                            <li
                              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1096">
                              <a
                                href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/cart/">Cart</a>
                            </li>
                            <li
                              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1095">
                              <a
                                href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/checkout/">Checkout</a>
                            </li>
                          </ul>
                        </li>
                        <li
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-803">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/about-us/">PAGES</a>
                          <ul class="sub-menu">
                            <li
                              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-804">
                              <a
                                href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/about-us/">About
                                                Us</a></li>
                            <li
                              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-805">
                              <a
                                href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/services/">Services</a>
                            </li>
                            <li
                              class="menu-item menu-item-type-post_type menu-item-object-courses menu-item-1006">
                              <a
                                href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/contemporary-art/">Course</a>
                            </li>
                            <li
                              class="menu-item menu-item-type-post_type menu-item-object-teachers menu-item-1007">
                              <a
                                href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/teachers/jane-taylor/">Teacher</a>
                            </li>
                            <li
                              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1036">
                              <a
                                href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/learning-account/">My
                                                Account</a></li>
                          </ul>
                        </li>
                        <li
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-814">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/blog-masonry-full-width/">BLOG</a>
                          <ul class="sub-menu">
                            <li
                              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-812">
                              <a
                                href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/blog-masonry-full-width/">Masonry</a>
                              <ul class="sub-menu">
                                <li
                                  class="nd_options_best_label menu-item menu-item-type-post_type menu-item-object-page menu-item-1005">
                                  <a
                                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/blog-masonry-full-width/">Full
                                                        Width</a></li>
                                <li
                                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1004">
                                  <a
                                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/blog-masonry-right-sidebar/">Right
                                                        Sidebar</a></li>
                                <li
                                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1003">
                                  <a
                                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/blog-masonry-left-sidebar/">Left
                                                        Sidebar</a></li>
                              </ul>
                            </li>
                            <li
                              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-994">
                              <a
                                href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/blog-standard-right-sidebar/">Standard</a>
                              <ul class="sub-menu">
                                <li
                                  class="nd_options_best_label menu-item menu-item-type-post_type menu-item-object-page menu-item-996">
                                  <a
                                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/blog-standard-right-sidebar/">Right
                                                        Sidebar</a></li>
                                <li
                                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-995">
                                  <a
                                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/blog-standard-left-sidebar/">Left
                                                        Sidebar</a></li>
                              </ul>
                            </li>
                            <li
                              class="menu-item menu-item-type-post_type menu-item-object-post menu-item-has-children menu-item-909">
                              <a
                                href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/our-library/">Single
                                                Post</a>
                              <ul class="sub-menu">
                                <li
                                  class="menu-item menu-item-type-post_type menu-item-object-post menu-item-811">
                                  <a
                                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/new-website/">Right
                                                        Sidebar</a></li>
                                <li
                                  class="menu-item menu-item-type-post_type menu-item-object-post menu-item-810">
                                  <a
                                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/course-registration/">Left
                                                        Sidebar</a></li>
                                <li
                                  class="menu-item menu-item-type-post_type menu-item-object-post menu-item-813">
                                  <a
                                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/our-library/">Full
                                                        width</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-806">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/contact/">CONTACT</a>
                        </li>
                      </ul>
                    </div>
                  </div>






                  <div class="nd_options_display_table_cell nd_options_vertical_align_middle">
                    <a class="nd_options_navigation_open_search_content nd_options_margin_left_20 nd_options_float_left"
                      href="#"><img alt=""
                        class=" nd_options_float_left nd_options_opacity_05_hover nd_options_transition_all_08_ease"
                        width="25"
                        src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/08/icon-search-grey.png" /></a>
                  </div>



                </div>

              </div>





              <div style={{ height: '10px' }} class="nd_options_section"></div>

            </div>



            <div
              class="nd_options_section nd_options_text_align_center nd_options_display_none nd_options_display_block_responsive">
              <div class="nd_options_section nd_options_height_20"></div>

              <a class="nd_options_display_inline_block"
                href="http://www.nicdarkthemes.com/themes/education/wp/demo/university"><img alt=""
                  class="nd_options_float_left" width="170"
                  src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/08/logo-university.png" /></a>

              <div class="nd_options_section nd_options_height_10"></div>

              <div class="nd_options_section">
                <a class="nd_options_open_navigation_2_sidebar_content nd_options_open_navigation_2_sidebar_content"
                  href="#">
                  <img alt="" class="" width="25"
                    src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/08/icon-menu-grey.png" />
                </a>
              </div>

              <div class="nd_options_section nd_options_height_20"></div>
            </div>



          </div>

        </div>


      </div>
      <div class="nd_tds_display_none_responsive nd_tds_dialog_open_content_dialog nd_tds_cursor_pointer nd_tds_right_30 nd_tds_bottom_30 nd_tds_position_fixed nd_tds_z_index_999">
        <a
          class="nd_tds_text_align_center nd_tds_width_65 nd_tds_float_left nd_tds_height_65 nd_tds_font_weight_bold nd_tds_display_table nd_tds_font_size_25 nd_tds_line_height_25 nd_tds_color_fff_important nd_tds_border_radius_100_percentage nd_tds_background_color_3 nd_tds_box_shadow_0_0_20_000_015 nd_tds_font_family_montserrat_important">
          <img width="25px" height="25px"
            class="nd_tds_animation_rotate nd_tds_float_left nd_tds_position_absolute nd_tds_top_20 nd_tds_left_20"
            src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-theme-demos-switcher/addons/dialog/img/settings.svg" />
        </a>
      </div>
      <div class="nd_tds_display_none_responsive nd_tds_display_none" id="nd_tds_dialog_content_dialog">



        <div class="nd_tds_position_relative nd_tds_section nd_tds_box_sizing_border_box">

          <a
            class="nd_tds_dialog_btn_close_content_dialog nd_tds_cursor_pointer nd_tds_position_absolute nd_tds_left_50_percentage nd_tds_margin_left_27_negative nd_tds_background_color_d95863 nd_tds_display_inline_block nd_tds_padding_15 nd_tds_border_radius_100_percentage">
            <img class="nd_tds_float_left" width="25px" height="25px;"
              src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-theme-demos-switcher/addons/dialog/img/close.svg" />
          </a>

          <div class="nd_tds_section nd_tds_margin_top_27 nd_tds_background_color_fff">


            <div class="nd_tds_section nd_tds_padding_40 nd_tds_box_sizing_border_box nd_tds_text_align_center">
              <div class="nd_tds_section nd_tds_height_20"></div>
              <h3><strong>GET AN AWESOME START!</strong></h3>
              <div class="nd_tds_section nd_tds_height_20"></div>
              <p>With easy ONE CLICK INSTALL and fully customizable options, our demos are the best start you
                ll ever get!!</p>
            </div>

            <h1
              class="nd_tds_text_align_center nd_tds_font_size_60 nd_tds_margin_bottom_20_negative nd_tds_line_height_60 nd_tds_color_f1f1f1_important">
              <strong>DEMOS</strong></h1>


            <div
              class="nd_tds_section nd_tds_position_relative nd_tds_padding_0_30 nd_tds_box_sizing_border_box">
              <div
                class="nd_tds_float_left nd_tds_width_33_percentage nd_tds_padding_10 nd_tds_box_sizing_border_box">
                <a class="nd_tds_outline_0" target="_blank"
                  href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/"><img
                    class="nd_tds_section nd_tds_box_shadow_0_0_20_000_015"
                    src="http://www.nicdarkthemes.com/themes/education/wp/demo/intro/img/demos/1.jpg" /></a>
              </div>
              <div
                class="nd_tds_float_left nd_tds_width_33_percentage nd_tds_padding_10 nd_tds_box_sizing_border_box">
                <a class="nd_tds_outline_0" target="_blank"
                  href="http://www.nicdarkthemes.com/themes/education/wp/demo/design-school/"><img
                    class="nd_tds_section nd_tds_box_shadow_0_0_20_000_015"
                    src="http://www.nicdarkthemes.com/themes/education/wp/demo/intro/img/demos/2.jpg" /></a>
              </div>
              <div
                class="nd_tds_float_left nd_tds_width_33_percentage nd_tds_padding_10 nd_tds_box_sizing_border_box">
                <a class="nd_tds_outline_0" target="_blank"
                  href="http://www.nicdarkthemes.com/themes/education/wp/demo/food-academy/"><img
                    class="nd_tds_section nd_tds_box_shadow_0_0_20_000_015"
                    src="http://www.nicdarkthemes.com/themes/education/wp/demo/intro/img/demos/3.jpg" /></a>
              </div>
            </div>
            <div class="nd_tds_section nd_tds_padding_0_30 nd_tds_box_sizing_border_box">
              <div
                class="nd_tds_float_left nd_tds_width_33_percentage nd_tds_padding_10 nd_tds_box_sizing_border_box">
                <a class="nd_tds_outline_0" target="_blank"
                  href="http://www.nicdarkthemes.com/themes/education/wp/demo/language-school/"><img
                    class="nd_tds_section nd_tds_box_shadow_0_0_20_000_015"
                    src="http://www.nicdarkthemes.com/themes/education/wp/demo/intro/img/demos/4.jpg" /></a>
              </div>
              <div
                class="nd_tds_float_left nd_tds_width_33_percentage nd_tds_padding_10 nd_tds_box_sizing_border_box">
                <a class="nd_tds_outline_0" target="_blank"
                  href="http://www.nicdarkthemes.com/themes/education/wp/demo/e-learning-courses/"><img
                    class="nd_tds_section nd_tds_box_shadow_0_0_20_000_015"
                    src="http://www.nicdarkthemes.com/themes/education/wp/demo/intro/img/demos/5.jpg" /></a>
              </div>
              <div
                class="nd_tds_float_left nd_tds_width_33_percentage nd_tds_padding_10 nd_tds_box_sizing_border_box">
                <a class="nd_tds_outline_0" target="_blank"
                  href="http://www.nicdarkthemes.com/themes/education/wp/demo/kindergarten/"><img
                    class="nd_tds_section nd_tds_box_shadow_0_0_20_000_015"
                    src="http://www.nicdarkthemes.com/themes/education/wp/demo/intro/img/demos/6.jpg" /></a>
              </div>
            </div>
            <div class="nd_tds_section nd_tds_padding_0_30 nd_tds_box_sizing_border_box">
              <div
                class="nd_tds_float_left nd_tds_width_33_percentage nd_tds_padding_10 nd_tds_box_sizing_border_box">
                <a class="nd_tds_outline_0" target="_blank"
                  href="http://www.nicdarkthemes.com/themes/education/wp/demo/music-school/"><img
                    class="nd_tds_section nd_tds_box_shadow_0_0_20_000_015"
                    src="http://www.nicdarkthemes.com/themes/education/wp/demo/intro/img/demos/7.jpg" /></a>
              </div>
              <div
                class="nd_tds_float_left nd_tds_width_33_percentage nd_tds_padding_10 nd_tds_box_sizing_border_box">
                <a class="nd_tds_outline_0" target="_blank"
                  href="http://www.nicdarkthemes.com/themes/education/wp/demo/dance-academy/"><img
                    class="nd_tds_section nd_tds_box_shadow_0_0_20_000_015"
                    src="http://www.nicdarkthemes.com/themes/education/wp/demo/intro/img/demos/8.jpg" /></a>
              </div>
              <div
                class="nd_tds_float_left nd_tds_width_33_percentage nd_tds_padding_10 nd_tds_box_sizing_border_box">
                <a class="nd_tds_outline_0" target="_blank"
                  href="http://www.nicdarkthemes.com/themes/education/wp/demo/driving-school/"><img
                    class="nd_tds_section nd_tds_box_shadow_0_0_20_000_015"
                    src="http://www.nicdarkthemes.com/themes/education/wp/demo/intro/img/demos/9.jpg" /></a>
              </div>
            </div>


            <div class="nd_tds_section nd_tds_height_30"></div>
            <div class="nd_tds_section nd_tds_text_align_center">
              <a class="nd_tds_outline_0 nd_tds_display_inline_block nd_tds_text_align_center nd_tds_color_fff_important nd_tds_padding_10_20 nd_tds_font_family_montserrat_important nd_tds_font_size_16 nd_tds_line_height_16 nd_tds_border_radius_3 nd_tds_background_color_49bf8f nd_tds_box_shadow_0_4_0_349c72"
                target="_blank" href="https://1.envato.market/53YOn">
                PURCHASE NOW
            </a>
            </div>
            <div class="nd_tds_section nd_tds_height_40"></div>


          </div>

        </div>

      </div>

      <div class="nd_tds_display_none_responsive nd_tds_right_125 nd_tds_bottom_30 nd_tds_position_fixed nd_tds_z_index_999">
        <a href="https://1.envato.market/53YOn" target="_blank"
          class="nd_tds_text_align_center nd_tds_width_65 nd_tds_float_left nd_tds_height_65 nd_tds_font_weight_bold nd_tds_display_table nd_tds_font_size_25 nd_tds_line_height_25 nd_tds_color_fff_important nd_tds_border_radius_100_percentage nd_tds_background_color_1 nd_tds_box_shadow_0_0_20_000_015 nd_tds_font_family_montserrat_important">
          <span
            class="nd_tds_position_absolute nd_tds_top_22 nd_tds_left_13 nd_tds_font_size_8 nd_tds_line_height_8">$</span>
          <span class="nd_tds_display_table_cell nd_tds_vertical_align_middle nd_tds_padding_left_5">54</span>
        </a>
      </div>

      <div class="nd_tds_display_none_responsive nd_tds_right_175 nd_tds_bottom_30 nd_tds_position_fixed nd_tds_z_index_999">
        <a target="_blank"
          class="nd_tds_border_radius_100_percentage nd_tds_width_35 nd_tds_height_35 nd_tds_float_left nd_tds_background_color_2 nd_tds_box_shadow_0_0_20_000_015"
          href="https://1.envato.market/53YOn">
          <img class="nd_tds_position_absolute nd_tds_left_10 nd_tds_top_10" width="15px"
            src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-theme-demos-switcher/addons/fixed-img/img/envato.png" />
        </a>
      </div>
      <div class="nd_options_container nd_options_padding_0_15 nd_options_box_sizing_border_box nd_options_clearfix">
        <div style={{ float: 'left', width: '100%' }} id="post-204" class="post-204 page type-page status-publish hentry">
          <div class="vc_row wpb_row vc_row-fluid">
            <div class="wpb_column vc_column_container vc_col-sm-12">
              <div class="vc_column-inner ">
                <div class="wpb_wrapper">
                  <div class="wpb_revslider_element wpb_content_element">
                    <link href="http://fonts.googleapis.com/css?family=Montserrat:700" rel="stylesheet"
                      property="stylesheet" type="text/css" media="all" />
                    <div id="rev_slider_4_1_wrapper"
                      class="rev_slider fullwidthabanner revslider-initialised tp-simpleresponsive rev_redraw_on_blurfocus" data-source="gallery"
                      style={{ margin: '0px auto', padding: '0px', marginTop: '0px', marginBottom: '0px' }}>
                      <div id="rev_slider_4_1" class="rev_slider fullwidthabanner"
                        style={{ display: 'none' }} data-version="5.4.8.3">
                        <ul>
                          <li data-index="rs-7" data-transition="fade" data-slotamount="default"
                            data-hideafterloop="0" data-hideslideonmobile="off"
                            data-easein="default" data-easeout="default" data-masterspeed="300"
                            data-thumb="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/08/parallax5-100x50.jpg"
                            data-rotate="0" data-saveperformance="off" data-title="Slide"
                            data-param1="" data-param2="" data-param3="" data-param4=""
                            data-param5="" data-param6="" data-param7="" data-param8=""
                            data-param9="" data-param10="" data-description="">
                            <img src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/08/parallax5.jpg"
                              alt="" title="parallax5" width="1920" height="1080"
                              data-bgposition="center center" data-kenburns="on"
                              data-duration="10000" data-ease="Linear.easeNone"
                              data-scalestart="100" data-scaleend="110" data-rotatestart="0"
                              data-rotateend="0" data-blurstart="0" data-blurend="0"
                              data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="14"
                              class="rev-slidebg" data-no-retina />
                            <div class="tp-caption tp-shape tp-shapewrapper  tp-resizeme"
                              id="slide-7-layer-4" data-x="center" data-hoffset=""
                              data-y="center" data-voffset="" data-width="['3000']"
                              data-height="['873']" data-type="shape"
                              data-responsive_offset="on"
                              data-frames='[{"from":"opacity:0;","speed":300,"to":"o:1;","delay":0,"ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                              data-textAlign="['left','left','left','left']"
                              data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]"
                              data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]"
                              style={{ zIndex: 5, backgroundColor: 'rgba(0,0,0,0.50)', background: 'linear-gradient(to bottom, rgba(101,100,96,0.8) 0%,rgba(101,100,96,0.3) 35%,rgba(101,100,96,0.3) 45%,rgba(101,100,96,0.9) 100%' }}>
                            </div>

                            <div class="tp-caption   tp-resizeme" id="slide-7-layer-8"
                              data-x="30" data-y="bottom" data-voffset="150"
                              data-width="['auto']" data-height="['auto']"
                              data-visibility="['on','on','off','off']" data-type="text"
                              data-responsive_offset="on"
                              data-frames='[{"from":"opacity:0;","speed":500,"to":"o:1;","delay":500,"ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                              data-textAlign="['left','left','left','left']"
                              data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]"
                              data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]"
                              style={{ zIndex: 6, whiteSpace: 'nowrap', fontSize: '20px', lineHeight: '22px', fontWeight: 400, color: 'rgba(255,255,255,1)' }}>
                              <h1 style={{ color: '#ffffff', fontSize: '60px', lineHeight: '60px', fontWeight: 'bold' }}
                                class=" nd_options_first_font ">In our School you can</h1>
                              <div style={{ height: '20px' }}
                                class="nicdark_section"></div>


                              <div class="nd_options_display_none_all_iphone nd_options_section  nd_options_typewriter_85 ">


                                <strong style={{ color: '#ffffff', fontSize: '40px' }}
                                  class="nd_options_first_font">learn </strong>

                                <div class="nd_options_typed_strings_85">

                                  <p><strong style={{ color: '#ffffff', fontSize: '40px' }}
                                    class="nd_options_first_font"> how to make an
                                                                        exam</strong></p>
                                  <p><strong style={{ color: '#ffffff', fontSize: '40px' }}
                                    class="nd_options_first_font">
                                    philosophy</strong></p>
                                  <p><strong style={{ color: '#ffffff', fontSize: '40px' }}
                                    class="nd_options_first_font"> </strong></p>

                                </div>

                                <span
                                  class="nd_options_typed_85 nd_options_padding_botttom_5"
                                  style={{ whiteSpace: 'pre', borderBottom: '5px solid #ffffff' }}></span>

                              </div>




                            </div>
                          </li>
                          <li data-index="rs-8" data-transition="fade" data-slotamount="default"
                            data-hideafterloop="0" data-hideslideonmobile="off"
                            data-easein="default" data-easeout="default" data-masterspeed="300"
                            data-thumb="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/08/parallax3-100x50.jpg"
                            data-rotate="0" data-saveperformance="off" data-title="Slide"
                            data-param1="" data-param2="" data-param3="" data-param4=""
                            data-param5="" data-param6="" data-param7="" data-param8=""
                            data-param9="" data-param10="" data-description="">
                            <img src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/08/parallax3.jpg"
                              alt="" title="parallax3" width="1920" height="1080"
                              data-bgposition="center bottom" data-kenburns="on"
                              data-duration="10000" data-ease="Linear.easeNone"
                              data-scalestart="100" data-scaleend="110" data-rotatestart="0"
                              data-rotateend="0" data-blurstart="0" data-blurend="0"
                              data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="14"
                              class="rev-slidebg" data-no-retina />
                            <div class="tp-caption tp-shape tp-shapewrapper  tp-resizeme"
                              id="slide-8-layer-4" data-x="center" data-hoffset=""
                              data-y="center" data-voffset="" data-width="['3000']"
                              data-height="['873']" data-type="shape"
                              data-responsive_offset="on"
                              data-frames='[{"from":"opacity:0;","speed":300,"to":"o:1;","delay":0,"ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                              data-textAlign="['left','left','left','left']"
                              data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]"
                              data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]"
                              style={{ zIndex: 7, backgroundColor: 'rgba(0,0,0,0.50)', background: 'linear-gradient(to bottom, rgba(101,100,96,0.6) 0%,rgba(101,100,96,0.6) 75%,rgba(101,100,96,0) 100%)' }}>
                            </div>

                            <div class="tp-caption   tp-resizeme" id="slide-8-layer-1"
                              data-x="center" data-hoffset="" data-y="center"
                              data-voffset="-100" data-width="['auto']" data-height="['auto']"
                              data-visibility="['on','on','on','off']" data-type="text"
                              data-responsive_offset="on"
                              data-frames='[{"from":"opacity:0;","speed":500,"to":"o:1;","delay":500,"ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                              data-textAlign="['left','left','left','left']"
                              data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]"
                              data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]"
                              style={{ zIndex: 8, whiteSpace: 'nowrap', fontSize: '70px', lineHeight: '70px', fontWeight: '700', color: 'rgba(255,255,255,1)', fontFamily: 'Montserrat' }}>
                              Education </div>

                            <div class="tp-caption   tp-resizeme" id="slide-8-layer-5"
                              data-x="center" data-hoffset="" data-y="center" data-voffset=""
                              data-width="['auto']" data-height="['auto']"
                              data-visibility="['on','on','on','off']" data-type="text"
                              data-responsive_offset="on"
                              data-frames='[{"from":"opacity:0;","speed":500,"to":"o:1;","delay":1000,"ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                              data-textAlign="['left','left','left','left']"
                              data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]"
                              data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]"
                              style={{ zIndex: 9, whiteSpace: 'nowrap', fontSize: '70px', lineHeight: "70px", fontWeight: '700', color: 'rgba(255,255,255,1)', fontFamily: 'Montserrat' }}>
                              Learning Courses </div>

                            <div class="tp-caption rev-btn  tp-resizeme" id="slide-8-layer-6"
                              data-x="center" data-hoffset="-90" data-y="center"
                              data-voffset="120" data-width="['auto']" data-height="['auto']"
                              data-visibility="['on','on','on','off']" data-type="button"
                              data-responsive_offset="on"
                              data-frames='[{"from":"opacity:0;","speed":500,"to":"o:1;","delay":1500,"ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"},{"frame":"hover","speed":"200","ease":"Power0.easeIn","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(255,255,255,1);bg:rgba(23,72,115,1);bc:rgba(23,72,115,1);bw:2px 2px 2px 2px;"}]'
                              data-textAlign="['left','left','left','left']"
                              data-paddingtop="[12,12,12,12]"
                              data-paddingright="[35,35,35,35]"
                              data-paddingbottom="[12,12,12,12]"
                              data-paddingleft="[35,35,35,35]"
                              style={{ zIndex: 10, whiteSpace: 'nowrap', fontSize: '16px', lineHeight: '16px', fontWeight: "700", color: 'rgba(255,255,255,1)', fontFamily: 'Montserrat', borderColor: 'rgba(255,255,255,1)', borderStyle: 'solid', borderWidth: '2px', borderRadius: '3px 3px 3px 3px', outline: 'none', boxShadow: 'none', boxSizing: 'border-box', MozBoxSizing: 'border-box', WebkitBoxSizing: 'border-box', cursor: 'pointer' }}>
                              ABOUT US </div>

                            <div class="tp-caption rev-btn  tp-resizeme" id="slide-8-layer-7"
                              data-x="center" data-hoffset="90" data-y="center"
                              data-voffset="120" data-width="['auto']" data-height="['auto']"
                              data-visibility="['on','on','on','off']" data-type="button"
                              data-responsive_offset="on"
                              data-frames='[{"from":"opacity:0;","speed":500,"to":"o:1;","delay":1500,"ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"},{"frame":"hover","speed":"200","ease":"Power0.easeIn","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(255,255,255,1);bg:transparent;bc:rgba(255,255,255,1);bw:2px 2px 2px 2px;"}]'
                              data-textAlign="['left','left','left','left']"
                              data-paddingtop="[12,12,12,12]"
                              data-paddingright="[35,35,35,35]"
                              data-paddingbottom="[12,12,12,12]"
                              data-paddingleft="[35,35,35,35]"
                              style={{ zIndex: 11, whiteSpace: 'nowrap', fontSize: '16px', lineHeight: '16px', fontWeight: '700', color: 'rgba(255,255,255,1)', fontfamily: 'Montserrat', backgroundcolor: 'rgba(23,72,115,1)', borderColor: 'rgba(23,72,115,1)', borderStyle: 'solid', borderWidth: '2px', borderRadius: '3px 3px 3px 3px', outline: 'none', boxShadow: 'none', boxSizing: 'border-box', MozBoxSizing: 'border-box', WebkitBoxSizing: 'border-box', cursor: 'pointer' }}>
                              COURSES </div>
                          </li>
                        </ul>

                        <div class="tp-bannertimer tp-bottom"
                          style={{ visibility: 'hidden !important' }}></div>
                      </div>


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="vc_row wpb_row vc_row-fluid vc_custom_1469629169190">
          <div class="wpb_column vc_column_container vc_col-sm-4">
            <div class="vc_column-inner vc_custom_1469629214371">
              <div class="wpb_wrapper">


                <div class="nd_options_section nd_options_position_relative ">
                  <a rel=""
                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/services/"><img
                      alt="" class="nd_options_position_absolute nd_options_left_0" width="50"
                      src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/08/service-color1.png" /></a>
                  <div
                    class="nd_options_section nd_options_padding_left_70 nd_options_box_sizing_border_box">
                    <a rel=""
                      href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/services/">
                      <h2 ><strong>National Awards</strong></h2>
                    </a>
                    <div class="nd_options_section nd_options_height_20"></div>
                    <p class="">Phasellus enim libero, blandit vel sapien vitae,
                                            condimentum ultricies magna et. Quisque euismod orci ut et lobortis.</p>
                  </div>
                </div>


              </div>
            </div>
          </div>
          <div class="wpb_column vc_column_container vc_col-sm-4">
            <div class="vc_column-inner vc_custom_1469629232888">
              <div class="wpb_wrapper">


                <div class="nd_options_section nd_options_position_relative ">
                  <a rel=""
                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/services/"><img
                      alt="" class="nd_options_position_absolute nd_options_left_0" width="50"
                      src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/08/service-color2.png" /></a>
                  <div
                    class="nd_options_section nd_options_padding_left_70 nd_options_box_sizing_border_box">
                    <a rel=""
                      href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/services/">
                      <h2><strong>Best Teachers</strong></h2>
                    </a>
                    <div class="nd_options_section nd_options_height_20"></div>
                    <p class="">Phasellus enim libero, blandit vel sapien vitae,
                                            condimentum ultricies magna et. Quisque euismod orci ut et lobortis.</p>
                  </div>
                </div>


              </div>
            </div>
          </div>
          <div class="wpb_column vc_column_container vc_col-sm-4">
            <div class="vc_column-inner vc_custom_1469629252362">
              <div class="wpb_wrapper">


                <div class="nd_options_section nd_options_position_relative ">
                  <a rel=""
                    href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/services/"><img
                      alt="" class="nd_options_position_absolute nd_options_left_0" width="50"
                      src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/08/service-color3.png" /></a>
                  <div
                    class="nd_options_section nd_options_padding_left_70 nd_options_box_sizing_border_box">
                    <a rel=""
                      href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/services/">
                      <h2><strong>Many Courses</strong></h2>
                    </a>
                    <div class="nd_options_section nd_options_height_20"></div>
                    <p class="">Phasellus enim libero, blandit vel sapien vitae,
                                            condimentum ultricies magna et. Quisque euismod orci ut et lobortis.</p>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
        <div class="vc_row wpb_row vc_row-fluid vc_custom_1469629191724">
          <div class="wpb_column vc_column_container vc_col-sm-5">
            <div class="vc_column-inner vc_custom_1469629019670">
              <div class="wpb_wrapper">


                <div class=" nd_learning_section">




                  <div
                    class="nd_learning_section nd_learning_bg_white nd_learning_border_1_solid_grey">

                    <div
                      class="nd_learning_section nd_learning_padding_20 nd_learning_box_sizing_border_box nd_learning_bg_grey nd_learning_border_bottom_1_solid_grey nd_learning_text_align_center">
                      <h6 style={{
                        backgroundColor: '#90cbde'
                      }}
                        class="nd_options_second_font nd_learning_padding_5 nd_learning_border_radius_3 nd_learning_color_white_important nd_learning_display_inline_block" >
                        7 COURSES</h6>
                      <div class="nd_learning_section nd_learning_height_5"></div>
                      <h1 class=""><strong>Search Now</strong></h1>
                    </div>

                    <div
                      class="nd_learning_section nd_learning_padding_20_25 nd_learning_box_sizing_border_box">

                      <form class=""
                        action="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/"
                        method="GET">

                        <input type="hidden" value="true"
                          name="nd_learning_arrive_from_advsearch" />

                        <div id="nd_learning_search_components_tax_0"
                          class=" nd_learning_width_100_percentage_all_iphone nd_learning_display_none nd_learning_width_100_percentage nd_learning_float_left nd_learning_padding_15 nd_learning_box_sizing_border_box">

                          <select class="nd_learning_section" name="post_tag">
                            <option value="">All Tags</option>
                            <option value="biology">Biology</option>
                            <option value="campus">Campus</option>
                            <option value="class">Class</option>
                            <option value="courses">Courses</option>
                            <option value="history">History</option>
                            <option value="students">Students</option>
                            <option value="university">University</option>
                          </select>
                        </div>

                        <div id="nd_learning_search_components_tax_1"
                          class=" nd_learning_width_100_percentage_all_iphone  nd_learning_width_100_percentage nd_learning_float_left nd_learning_padding_15 nd_learning_box_sizing_border_box">

                          <select class="nd_learning_section" name="difficulty-level-course">
                            <option value="">All Levels</option>
                            <option value="beginner">Beginner</option>
                            <option value="expert">Expert</option>
                            <option value="intermediate">Intermediate</option>
                          </select>
                        </div>

                        <div id="nd_learning_search_components_tax_2"
                          class=" nd_learning_width_100_percentage_all_iphone  nd_learning_width_100_percentage nd_learning_float_left nd_learning_padding_15 nd_learning_box_sizing_border_box">

                          <select class="nd_learning_section" name="category-course">
                            <option value="">All Categories</option>
                            <option value="art">Art</option>
                            <option value="english">English</option>
                            <option value="geometry">Geometry</option>
                            <option value="history">History</option>
                            <option value="mathematics">Mathematics</option>
                          </select>
                        </div>

                        <div id="nd_learning_search_components_tax_3"
                          class=" nd_learning_width_100_percentage_all_iphone  nd_learning_width_100_percentage nd_learning_float_left nd_learning_padding_15 nd_learning_box_sizing_border_box">

                          <select class="nd_learning_section" name="location-course">
                            <option value="">All Locations</option>
                            <option value="headquarter">Headquarter</option>
                            <option value="school-branch">School Branch</option>
                          </select>
                        </div>

                        <div id="nd_learning_search_components_tax_4"
                          class=" nd_learning_width_100_percentage_all_iphone  nd_learning_width_100_percentage nd_learning_float_left nd_learning_padding_15 nd_learning_box_sizing_border_box">

                          <select class="nd_learning_section" name="typology-course">
                            <option value="">All Typologies</option>
                            <option value="free">Free</option>
                            <option value="premium">Premium</option>
                          </select>
                        </div>

                        <div id="nd_learning_search_components_tax_5"
                          class=" nd_learning_width_100_percentage_all_iphone  nd_learning_width_100_percentage nd_learning_float_left nd_learning_padding_15 nd_learning_box_sizing_border_box">

                          <select class="nd_learning_section" name="duration-course">
                            <option value="">All Durations</option>
                            <option value="1-day">1 Day</option>
                            <option value="1-week">1 Week</option>
                            <option value="2-days">2 Days</option>
                            <option value="8-hours">8 Hours</option>
                          </select>
                        </div>

                        <div class="nd_learning_width_100_percentage nd_learning_float_left nd_learning_width_100_percentage_all_iphone nd_learning_padding_15 nd_learning_box_sizing_border_box">
                          <input class="nd_learning_section" type="submit" value="Search" />
                        </div>


                      </form>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div class="wpb_column vc_column_container vc_col-sm-7">
            <div class="vc_column-inner vc_custom_1469628682720">
              <div class="wpb_wrapper">
                <div class="nd_learning_section nd_learning_masonry_content  ">
                  <div
                    class=" nd_learning_width_50_percentage nd_learning_float_left nd_learning_padding_15 nd_learning_box_sizing_border_box nd_learning_masonry_item nd_learning_width_100_percentage_responsive">

                    <div class="nd_learning_section nd_learning_position_relative">

                      <img alt="" class="nd_learning_section"
                        src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/06/course1-501-350x465.png" />

                      <div
                        class="nd_learning_bg_greydark_alpha_5 nd_learning_position_absolute nd_learning_left_0 nd_learning_height_100_percentage nd_learning_width_100_percentage nd_learning_padding_30 nd_learning_box_sizing_border_box">


                        <a style={{ backgroundColor: '#90cbde' }}
                          class="nd_learning_position_absolute nd_learning_top_20 nd_learning_right_20 nd_learning_display_inline_block nd_learning_color_white_important nd_options_first_font nd_learning_padding_8 nd_learning_border_radius_3 nd_learning_font_size_13"
                          href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/philosophy/">FREE</a>


                        <div
                          class="nd_learning_display_table nd_learning_width_100_percentage nd_learning_height_100_percentage nd_learning_text_align_center">

                          <div
                            class="nd_learning_display_table_cell nd_learning_vertical_align_middle">

                            <h2 class="nd_learning_color_white_important"><a
                              class="nd_learning_color_white_important nd_options_first_font"
                              href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/philosophy/"><strong>Philosophy</strong></a>
                            </h2>
                            <div class="nd_learning_section nd_learning_height_10"></div>
                            <div class="nd_learning_section ">

                              <img alt="" style={{ margin: '2px' }} width="15" height="15"
                                src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-learning/assets/img/icons/icon-star-full-white.svg" /><img
                                alt="" style={{ margin: '2px' }} width="15" height="15"
                                src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-learning/assets/img/icons/icon-star-full-white.svg" /><img
                                alt="" style={{ margin: '2px' }} width="15" height="15"
                                src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-learning/assets/img/icons/icon-star-full-white.svg" /><img
                                alt="" style={{ margin: '2px' }} width="15" height="15"
                                src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-learning/assets/img/icons/icon-star-full-white.svg" /><img
                                alt="" style={{ margin: '2px' }} width="15" height="15"
                                src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-learning/assets/img/icons/icon-star-half-white.svg" />

                            </div>
                          </div>
                        </div>

                      </div>

                    </div>

                  </div>

                  <div
                    class=" nd_learning_width_50_percentage nd_learning_float_left nd_learning_padding_15 nd_learning_box_sizing_border_box nd_learning_masonry_item nd_learning_width_100_percentage_responsive">

                    <div class="nd_learning_section nd_learning_position_relative">

                      <img alt="" class="nd_learning_section"
                        src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/06/course8-350x465.jpg" />

                      <div
                        class="nd_learning_bg_greydark_alpha_5 nd_learning_position_absolute nd_learning_left_0 nd_learning_height_100_percentage nd_learning_width_100_percentage nd_learning_padding_30 nd_learning_box_sizing_border_box">


                        <a style={{ backgroundColor: '#90cbde' }}
                          class="nd_learning_position_absolute nd_learning_top_20 nd_learning_right_20 nd_learning_display_inline_block nd_learning_color_white_important nd_options_first_font nd_learning_padding_8 nd_learning_border_radius_3 nd_learning_font_size_13"
                          href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/contemporary-art/">FREE</a>


                        <div
                          class="nd_learning_display_table nd_learning_width_100_percentage nd_learning_height_100_percentage nd_learning_text_align_center">

                          <div
                            class="nd_learning_display_table_cell nd_learning_vertical_align_middle">

                            <h2 class="nd_learning_color_white_important"><a
                              class="nd_learning_color_white_important nd_options_first_font"
                              href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/contemporary-art/"><strong>Contemporary
                                                                    Art</strong></a></h2>
                            <div class="nd_learning_section nd_learning_height_10"></div>
                            <div class="nd_learning_section ">

                              <img alt="" style={{ margin: '2px' }} width="15" height="15"
                                src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-learning/assets/img/icons/icon-star-full-white.svg" /><img
                                alt="" style={{ margin: '2px' }} width="15" height="15"
                                src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-learning/assets/img/icons/icon-star-full-white.svg" /><img
                                alt="" style={{ margin: '2px' }} width="15" height="15"
                                src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-learning/assets/img/icons/icon-star-full-white.svg" /><img
                                alt="" style={{ margin: '2px' }} width="15" height="15"
                                src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-learning/assets/img/icons/icon-star-full-white.svg" /><img
                                alt="" style={{ margin: '2px' }} width="15" height="15"
                                src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-learning/assets/img/icons/icon-star-half-white.svg" />

                            </div>

                          </div>

                        </div>


                      </div>

                    </div>

                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-vc-full-width="true" data-vc-full-width-init="false" data-vc-parallax="1.5"
          data-vc-parallax-image="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/08/parallax2.jpg"
          class="vc_row wpb_row vc_row-fluid nd_options_vc_parallax_filter_2_2 vc_custom_1472477356923 vc_row-has-fill vc_general vc_parallax vc_parallax-content-moving">
          <div class="wpb_column vc_column_container vc_col-sm-12">
            <div class="vc_column-inner ">
              <div class="wpb_wrapper">
                <h2 style={{ color: '#ffffff', fontSize: '50px', lineHeight: '50px', fontWeight: 'bold' }}
                  class=" nd_options_first_font ">Our Courses</h2>
                <div style={{ height: '10px' }} class="nicdark_section"></div>
                <h3 style={{ color: '#ffffff', fontSize: '20px', lineHeight: '20px', fontWeight: 'normal' }}
                  class=" nd_options_first_font ">The Best In Our School</h3>
                <div
                  class="vc_row wpb_row vc_inner vc_row-fluid vc_custom_1469544575976 vc_row-has-fill">
                  <div class="wpb_column vc_column_container vc_col-sm-12">
                    <div class="vc_column-inner vc_custom_1469544701778">
                      <div class="wpb_wrapper">

                        <div class="nd_learning_section nd_learning_masonry_content  ">

                          <div
                            class=" nd_learning_width_33_percentage nd_learning_float_left nd_learning_padding_15 nd_learning_box_sizing_border_box nd_learning_masonry_item nd_learning_width_100_percentage_responsive">

                            <div class="nd_learning_section">

                              <div
                                class="nd_learning_section nd_learning_border_1_solid_grey">

                                <div
                                  class="nd_learning_section nd_learning_position_relative">


                                  <img class="nd_learning_section" alt=""
                                    src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/06/course1-501-740x416.png" />

                                  <div
                                    class="nd_learning_bg_greydark_alpha_gradient_4 nd_learning_position_absolute nd_learning_left_0 nd_learning_height_100_percentage nd_learning_width_100_percentage nd_learning_padding_20 nd_learning_box_sizing_border_box">


                                    <div
                                      class="nd_learning_position_absolute nd_learning_right_20 nd_learning_top_20">





                                      <div class="nd_learning_display_inline_block nd_learning_display_none_all_iphone">
                                        <a title="MAKE THE LOGIN FOR BOOKMARK" href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/learning-account/" class="nd_learning_tooltip_jquery nd_learning_margin_right_20 nd_learning_cursor_pointer nd_learning_display_inline_block  nd_learning_text_decoration_none" >
                                          <img alt="" width="20" height="20" src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-learning/assets/img/icons/icon-heart-empty-white.svg" />
                                        </a>
                                      </div>





                                      <div class="nd_learning_display_inline_block nd_learning_display_none_all_iphone">
                                        <a title="MAKE THE LOGIN FOR COMPARE" href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/learning-account/" class="nd_learning_tooltip_jquery nd_learning_cursor_pointer  nd_learning_display_inline_block nd_learning_text_decoration_none  " >
                                          <img alt="" width="20" height="20" src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-learning/assets/img/icons/icon-compare-empty-white.svg" />
                                        </a>
                                      </div>

                                    </div>



                                  </div>


                                </div>


                                <div class="nd_learning_section nd_learning_padding_20 nd_learning_box_sizing_border_box nd_learning_bg_white">

                                  <h3><a class="nd_options_color_greydark nd_options_first_font" href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/philosophy/">Philosophy</a></h3>
                                  <div class="nd_learning_section nd_learning_height_20"></div>
                                  <p><a class="" href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/philosophy/">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula. Nullam augue augue.</a></p>

                                </div>

                                <div class="nd_learning_section nd_learning_padding_20 nd_learning_box_sizing_border_box nd_learning_bg_grey nd_learning_border_top_1_solid_grey">

                                  <div class="nd_learning_width_50_percentage nd_learning_display_none_all_iphone nd_learning_float_left">
                                    <div class="nd_learning_display_table nd_learning_float_left">
                                      <img alt="" class="nd_learning_margin_right_10 nd_learning_display_table_cell nd_learning_vertical_align_middle nd_learning_border_radius_100_percentage" width="30" src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/08/avatar-5.jpg" />
                                      <p class="nd_learning_display_table_cell nd_learning_vertical_align_middle nd_learning_font_size_15"><a href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/teachers/kaylin-moore/">Kaylin</a></p>
                                    </div>
                                  </div>

                                  <div class="nd_learning_width_50_percentage nd_learning_width_100_percentage_all_iphone nd_learning_float_left nd_learning_text_align_right">
                                    <a style={{ backgroundColor: '#90cbde' }} class="nd_learning_width_100_percentage_all_iphone nd_learning_box_sizing_border_box nd_learning_text_align_center_all_iphone nd_learning_display_inline_block nd_learning_color_white_important nd_options_first_font nd_learning_padding_8 nd_learning_border_radius_3 nd_learning_font_size_13" href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/philosophy/">READ MORE</a>
                                  </div>

                                </div>

                              </div>


                            </div>

                          </div>




                          <div class=" nd_learning_width_33_percentage nd_learning_float_left nd_learning_padding_15 nd_learning_box_sizing_border_box nd_learning_masonry_item nd_learning_width_100_percentage_responsive">

                            <div class="nd_learning_section">


                              <div class="nd_learning_section nd_learning_border_1_solid_grey">


                                <div class="nd_learning_section nd_learning_position_relative">


                                  <img class="nd_learning_section" alt="" src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/06/course8-740x416.jpg" />

                                  <div class="nd_learning_bg_greydark_alpha_gradient_4 nd_learning_position_absolute nd_learning_left_0 nd_learning_height_100_percentage nd_learning_width_100_percentage nd_learning_padding_20 nd_learning_box_sizing_border_box">


                                    <div class="nd_learning_position_absolute nd_learning_right_20 nd_learning_top_20">




                                      <div class="nd_learning_display_inline_block nd_learning_display_none_all_iphone">
                                        <a title="MAKE THE LOGIN FOR BOOKMARK" href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/learning-account/" class="nd_learning_tooltip_jquery nd_learning_margin_right_20 nd_learning_cursor_pointer nd_learning_display_inline_block  nd_learning_text_decoration_none" >
                                          <img alt="" width="20" height="20" src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-learning/assets/img/icons/icon-heart-empty-white.svg" />
                                        </a>
                                      </div>




                                      <div class="nd_learning_display_inline_block nd_learning_display_none_all_iphone">
                                        <a title="MAKE THE LOGIN FOR COMPARE" href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/learning-account/" class="nd_learning_tooltip_jquery nd_learning_cursor_pointer  nd_learning_display_inline_block nd_learning_text_decoration_none  " >
                                          <img alt="" width="20" height="20" src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-learning/assets/img/icons/icon-compare-empty-white.svg" />
                                        </a>
                                      </div>

                                    </div>



                                  </div>


                                </div>


                                <div class="nd_learning_section nd_learning_padding_20 nd_learning_box_sizing_border_box nd_learning_bg_white">

                                  <h3><a class="nd_options_color_greydark nd_options_first_font" href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/contemporary-art/">Contemporary Art</a></h3>
                                  <div class="nd_learning_section nd_learning_height_20"></div>
                                  <p><a class="" href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/contemporary-art/">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula. Nullam augue augue.</a></p>

                                </div>

                                <div class="nd_learning_section nd_learning_padding_20 nd_learning_box_sizing_border_box nd_learning_bg_grey nd_learning_border_top_1_solid_grey">

                                  <div class="nd_learning_width_50_percentage nd_learning_display_none_all_iphone nd_learning_float_left">
                                    <div class="nd_learning_display_table nd_learning_float_left">
                                      <img alt="" class="nd_learning_margin_right_10 nd_learning_display_table_cell nd_learning_vertical_align_middle nd_learning_border_radius_100_percentage" width="30" src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/08/avatar-2.jpg" />
                                      <p class="nd_learning_display_table_cell nd_learning_vertical_align_middle nd_learning_font_size_15"><a href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/teachers/andy-jones/">Andy</a></p>
                                    </div>
                                  </div>

                                  <div class="nd_learning_width_50_percentage nd_learning_width_100_percentage_all_iphone nd_learning_float_left nd_learning_text_align_right">
                                    <a style={{ backgroundColor: '#90cbde' }} class="nd_learning_width_100_percentage_all_iphone nd_learning_box_sizing_border_box nd_learning_text_align_center_all_iphone nd_learning_display_inline_block nd_learning_color_white_important nd_options_first_font nd_learning_padding_8 nd_learning_border_radius_3 nd_learning_font_size_13" href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/contemporary-art/">READ MORE</a>
                                  </div>

                                </div>

                              </div>


                            </div>

                          </div>




                          <div class=" nd_learning_width_33_percentage nd_learning_float_left nd_learning_padding_15 nd_learning_box_sizing_border_box nd_learning_masonry_item nd_learning_width_100_percentage_responsive">

                            <div class="nd_learning_section">


                              <div class="nd_learning_section nd_learning_border_1_solid_grey">


                                <div class="nd_learning_section nd_learning_position_relative">


                                  <img class="nd_learning_section" alt="" src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/09/course3-2-740x416.jpg" />

                                  <div class="nd_learning_bg_greydark_alpha_gradient_4 nd_learning_position_absolute nd_learning_left_0 nd_learning_height_100_percentage nd_learning_width_100_percentage nd_learning_padding_20 nd_learning_box_sizing_border_box">


                                    <div class="nd_learning_position_absolute nd_learning_right_20 nd_learning_top_20">



                                      <div class="nd_learning_display_inline_block nd_learning_display_none_all_iphone">
                                        <a title="MAKE THE LOGIN FOR BOOKMARK" href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/learning-account/" class="nd_learning_tooltip_jquery nd_learning_margin_right_20 nd_learning_cursor_pointer nd_learning_display_inline_block  nd_learning_text_decoration_none" >
                                          <img alt="" width="20" height="20" src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-learning/assets/img/icons/icon-heart-empty-white.svg" />
                                        </a>
                                      </div>






                                      <div class="nd_learning_display_inline_block nd_learning_display_none_all_iphone">
                                        <a title="MAKE THE LOGIN FOR COMPARE" href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/learning-account/" class="nd_learning_tooltip_jquery nd_learning_cursor_pointer  nd_learning_display_inline_block nd_learning_text_decoration_none  " >
                                          <img alt="" width="20" height="20" src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-learning/assets/img/icons/icon-compare-empty-white.svg" />
                                        </a>
                                      </div>

                                    </div>



                                  </div>


                                </div>
                                <div class="nd_learning_section nd_learning_padding_20 nd_learning_box_sizing_border_box nd_learning_bg_white">

                                  <h3><a class="nd_options_color_greydark nd_options_first_font" href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/geometry-course/">Geometry Course</a></h3>
                                  <div class="nd_learning_section nd_learning_height_20"></div>
                                  <p><a class="" href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/geometry-course/">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula. Nullam augue augue.</a></p>

                                </div>

                                <div class="nd_learning_section nd_learning_padding_20 nd_learning_box_sizing_border_box nd_learning_bg_grey nd_learning_border_top_1_solid_grey">

                                  <div class="nd_learning_width_50_percentage nd_learning_display_none_all_iphone nd_learning_float_left">
                                    <div class="nd_learning_display_table nd_learning_float_left">
                                      <img alt="" class="nd_learning_margin_right_10 nd_learning_display_table_cell nd_learning_vertical_align_middle nd_learning_border_radius_100_percentage" width="30" src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/08/avatar-7.jpg" />
                                      <p class="nd_learning_display_table_cell nd_learning_vertical_align_middle nd_learning_font_size_15"><a href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/teachers/john-brown/">John</a></p>
                                    </div>
                                  </div>

                                  <div class="nd_learning_width_50_percentage nd_learning_width_100_percentage_all_iphone nd_learning_float_left nd_learning_text_align_right">
                                    <a style={{ backgroundColor: '#90cbde' }} class="nd_learning_width_100_percentage_all_iphone nd_learning_box_sizing_border_box nd_learning_text_align_center_all_iphone nd_learning_display_inline_block nd_learning_color_white_important nd_options_first_font nd_learning_padding_8 nd_learning_border_radius_3 nd_learning_font_size_13" href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/geometry-course/">READ MORE</a>
                                  </div>

                                </div>

                              </div>


                            </div>

                          </div>

                        </div></div></div></div></div></div></div></div>
          <div class="vc_row-full-width vc_clearfix"></div><div class="vc_row wpb_row vc_row-fluid vc_custom_1467358718647"><div class="wpb_column vc_column_container vc_col-sm-12"><div class="vc_column-inner "><div class="wpb_wrapper"> <h2 style={{ color: '#727475', fontSize: '50px', lineHeight: '50px', fontWeight: 'bold' }} class=" nd_options_first_font ">Our Teachers</h2> <div style={{ height: '10px' }} class="nicdark_section"></div> <h3 style={{ color: '#a3a3a3', fontSize: '20px', lineHeight: '20px', fontWeight: 'normal' }} class=" nd_options_first_font ">Best Chef In Our School</h3> <div style={{ height: '30px' }} class="nicdark_section"></div></div></div></div></div><div class="vc_row wpb_row vc_row-fluid"><div class="wpb_column vc_column_container vc_col-sm-12"><div class="vc_column-inner vc_custom_1469541557182"><div class="wpb_wrapper">
          </div>
          </div>
          </div>
          </div>
        </div>
        {/* <h1 style={{ textAlign: 'center', color: '#ffffff', fontSize: '50px' }} class=" nd_options_font_weight_bolder nd_options_counter  " data-to="15" data-speed="1000">15</h1>
        <div style="background-color:; height: 20px;" class="nicdark_section">
          </div>
           <p style="color:#ffffff; text-align:center; font-size:16px; line-height:30px; font-weight:normal;" class=" nd_options_second_font ">TEACHERS</p> 
          </div></div></div ><div class="wpb_column vc_column_container vc_col-sm-3"><div class="vc_column-inner vc_custom_1469542699216"><div class="wpb_wrapper">
        <h1 style={{ textAlign: 'center', color: '#ffffff', fontSize: '50px' }} class=" nd_options_font_weight_bolder nd_options_counter  " data-to="100" data-speed="1000">100</h1><div style="background-color:; height: 20px;" class="nicdark_section"></div> <p style="color:#ffffff; text-align:center; font-size:16px; line-height:30px; font-weight:normal;" class=" nd_options_second_font ">CUSTOMERS</p> </div></div></div><div class="wpb_column vc_column_container vc_col-sm-3"><div class="vc_column-inner vc_custom_1469542716372"><div class="wpb_wrapper">
        <h1 style={{ textAlign: 'center', color: '#ffffff', fontSize: '50px' }} class=" nd_options_font_weight_bolder nd_options_counter  " data-to="47" data-speed="1000">47</h1><div style="background-color:; height: 20px;" class="nicdark_section"></div> <p style="color:#ffffff; text-align:center; font-size:16px; line-height:30px; font-weight:normal;" class=" nd_options_second_font ">COURSES</p> </div></div></div><div class="wpb_column vc_column_container vc_col-sm-3"><div class="vc_column-inner vc_custom_1469542732403"><div class="wpb_wrapper">
        <h1 style={{ textAlign: 'center', color: '#ffffff', fontSize: '50px' }} class=" nd_options_font_weight_bolder nd_options_counter  " data-to="97" data-speed="1000">97</h1><div style="background-color:; height: 20px;" class="nicdark_section"></div> <p style="color:#ffffff; text-align:center; font-size:16px; line-height:30px; font-weight:normal;" class=" nd_options_second_font ">YEARS OF EXPERIENCE</p> </div></div></div></div ><div class="vc_row-full-width vc_clearfix"></div><div class="vc_row wpb_row vc_row-fluid vc_custom_1467358433878"><div class="wpb_column vc_column_container vc_col-sm-12"><div class="vc_column-inner "><div class="wpb_wrapper"> <h2 style="color:#727475; text-align:; font-size:50px; line-height:50px; font-weight:bold;" class=" nd_options_first_font ">Our Blog</h2> <div style="background-color:; height: 10px;" class="nicdark_section"></div> <h3 style="color:#a3a3a3; text-align:; font-size:20px; line-height:20px; font-weight:normal;" class=" nd_options_first_font ">Follow Our News</h3> </div></div></div></div><div class="vc_row wpb_row vc_row-fluid vc_custom_1467280961639"><div class="wpb_column vc_column_container vc_col-sm-12"><div class="vc_column-inner vc_custom_1469541591315"><div class="wpb_wrapper">
       */}
        <div class="vc_row-full-width vc_clearfix"></div>
        <div class="vc_row wpb_row vc_row-fluid vc_custom_1467358433878">
          <div class="wpb_column vc_column_container vc_col-sm-12">
            <div class="vc_column-inner ">
              <div class="wpb_wrapper">
                <h2 style={{ color: '#727475', fontSize: '50px', lineHeight: '50px', fontWeight: 'bold' }}
                  class=" nd_options_first_font ">Our Blog</h2>
                <div style={{ height: '10px' }} class="nicdark_section"></div>
                <h3 style={{ color: '#a3a3a3', fontSize: '20px', lineHeight: '20px', fontWeight: 'normal' }}
                  class=" nd_options_first_font ">Follow Our News</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="vc_row wpb_row vc_row-fluid vc_custom_1467280961639">
          <div class="wpb_column vc_column_container vc_col-sm-12">
            <div class="vc_column-inner vc_custom_1469541591315">
              <div class="wpb_wrapper">




                <div class="nd_options_section nd_options_masonry_content  ">


                  <div
                    class=" nd_options_width_33_percentage nd_options_float_left nd_options_padding_15 nd_options_box_sizing_border_box nd_options_masonry_item nd_options_width_100_percentage_responsive">
                    <div class="nd_options_section nd_options_border_1_solid_grey">

                      <div class="nd_options_section nd_options_position_relative">




                        <div class="nd_options_section nd_options_position_relative">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/new-website/"><img
                              alt="" class="nd_options_section"
                              src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/08/course2.jpg" /></a>
                          <div
                            class="nd_options_bg_greydark_alpha nd_options_position_absolute nd_options_left_0 nd_options_height_100_percentage nd_options_width_100_percentage nd_options_padding_30 nd_options_box_sizing_border_box">
                          </div>
                          <a class="nd_options_position_absolute nd_options_right_20 nd_options_top_20 nd_options_display_inline_block nd_options_border_1_solid_white nd_options_color_white nd_options_first_font nd_options_padding_8 nd_options_border_radius_3 nd_options_font_size_13 nd_options_z_index_9 nd_options_text_transform_uppercase"
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/new-website/">News</a>
                        </div>



                      </div>

                      <div
                        class="nd_options_section nd_options_padding_30 nd_options_box_sizing_border_box">
                        <h5
                          class="nd_options_margin_0_important nd_options_padding_0 nd_options_second_font nd_options_color_grey">
                          June 1</h5>
                        <div class="nd_options_section nd_options_height_10"></div>
                        <h2 class="nd_options_margin_0_important nd_options_padding_0 ">New
                                                    Website</h2>
                        <div class="nd_options_section nd_options_height_20"></div>
                        <p class="nd_options_margin_0_important nd_options_padding_0">Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas
                                                    magna at porttitor vehicula nullam augue.</p>
                        <div class="nd_options_section nd_options_height_20"></div>
                        <a style={{ backgroundColor: '#174873' }}
                          class="nd_options_display_inline_block nd_options_line_height_16 nd_options_text_align_center nd_options_box_sizing_border_box  nd_options_color_white nd_options_first_font nd_options_padding_10_20 nd_options_border_radius_3 "
                          href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/new-website/">READ
                                                    MORE</a>

                      </div>



                      <div
                        class="nd_options_section nd_options_padding_20_30 nd_options_box_sizing_border_box nd_options_border_top_1_solid_grey">

                        <div
                          class="nd_options_width_50_percentage nd_options_width_100_percentage_all_iphone nd_options_float_left">
                          <div class="nd_options_display_table nd_options_float_left">
                            <img alt=""
                              class="nd_options_margin_right_10 nd_options_display_table_cell nd_options_vertical_align_middle nd_options_border_radius_100_percentage"
                              width="25" height="25"
                              src="http://2.gravatar.com/avatar/240d164d512e70622cfed37027775e77?s=96&d=mm&r=g" />
                            <p
                              class="nd_options_display_table_cell nd_options_vertical_align_middle nd_options_font_size_15">
                              <a
                                href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/new-website/">giulsi</a>
                            </p>
                          </div>
                        </div>

                        <div
                          class="nd_options_width_50_percentage nd_options_display_none_all_iphone nd_options_float_left">
                          <div class="nd_options_display_table nd_options_float_left">
                            <img alt=""
                              class="nd_options_margin_right_10 nd_options_display_table_cell nd_options_vertical_align_middle "
                              width="23" height="23"
                              src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/img/icons/icon-comment-grey.svg" />
                            <p
                              class="nd_options_display_table_cell nd_options_vertical_align_middle nd_options_font_size_15">
                              <a
                                href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/new-website/">1
                                                                Comments</a></p>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>




                  <div
                    class=" nd_options_width_33_percentage nd_options_float_left nd_options_padding_15 nd_options_box_sizing_border_box nd_options_masonry_item nd_options_width_100_percentage_responsive">

                    <div style={{ backgroundColor: '#90cbde' }}
                      class="nd_options_section nd_options_text_align_center nd_options_padding_50 nd_options_box_sizing_border_box">

                      <h2 class="nd_options_color_white nd_options_line_height_35">
                        <a class="nd_options_color_white nd_options_first_font"
                          href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/quote-post/">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                </a>
                      </h2>

                      <div class="nd_options_section nd_options_height_20"></div>

                      <div class="nd_options_display_inline_block">
                        <div class="nd_options_display_table nd_options_float_left">
                          <img alt=""
                            class="nd_options_margin_right_10 nd_options_display_table_cell nd_options_vertical_align_middle"
                            width="30" height="30"
                            src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/img/icons/icon-quote-alpha.svg" />
                          <p
                            class="nd_options_color_white nd_options_display_table_cell nd_options_vertical_align_middle">
                            John Doe
                                                    </p>
                        </div>
                      </div>



                    </div>

                  </div>



                  <div
                    class=" nd_options_width_33_percentage nd_options_float_left nd_options_padding_15 nd_options_box_sizing_border_box nd_options_masonry_item nd_options_width_100_percentage_responsive">


                    <div class="nd_options_section nd_options_position_relative">




                      <div class="nd_options_section nd_options_position_relative">
                        <a
                          href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/our-students/"><img
                            alt="" class="nd_options_section"
                            src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/08/blog3.jpg" /></a>

                        <a style={{ backgroundColor: '#174873' }}
                          class="nd_options_position_absolute nd_options_right_20 nd_options_top_20 nd_options_display_inline_block nd_options_color_white nd_options_first_font nd_options_padding_8 nd_options_border_radius_3 nd_options_font_size_13 nd_options_z_index_9 nd_options_text_transform_uppercase"
                          href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/our-students/">News</a>


                        <div
                          class="nd_options_bg_greydark_alpha_gradient_3 nd_options_position_absolute nd_options_left_0 nd_options_height_100_percentage nd_options_width_100_percentage nd_options_padding_30 nd_options_box_sizing_border_box">
                          <div class="nd_options_position_absolute nd_options_bottom_30">
                            <h2 class="nd_options_color_white">
                              <a class="nd_options_color_white nd_options_first_font"
                                href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/our-students/">
                                Our Students
                                                            </a>
                            </h2>
                            <div class="nd_options_section nd_options_height_10"></div>
                            <div class="nd_options_display_table nd_options_float_left">
                              <img alt=""
                                class="nd_options_margin_right_10 nd_options_display_table_cell nd_options_vertical_align_middle"
                                width="20" height="20"
                                src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/img/icons/icon-calendar-white.svg" />
                              <p
                                class=" nd_options_color_white nd_options_display_table_cell nd_options_vertical_align_middle nd_options_font_size_13">
                                June 3</p>
                              <img alt=""
                                class="nd_options_margin_right_10 nd_options_margin_left_20 nd_options_display_table_cell nd_options_vertical_align_middle"
                                width="20" height="20"
                                src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/img/icons/icon-comment-white.svg" />
                              <p
                                class="nd_options_color_white nd_options_display_table_cell nd_options_vertical_align_middle nd_options_font_size_13">
                                1 Comments</p>
                            </div>

                          </div>

                        </div>


                      </div>



                    </div>


                  </div>




                  <div
                    class=" nd_options_width_33_percentage nd_options_float_left nd_options_padding_15 nd_options_box_sizing_border_box nd_options_masonry_item nd_options_width_100_percentage_responsive">
                    <div class="nd_options_section nd_options_border_1_solid_grey">

                      <div class="nd_options_section nd_options_position_relative">




                        <div class="nd_options_section nd_options_position_relative">
                          <a
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/course-registration/"><img
                              alt="" class="nd_options_section"
                              src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/08/blog2.jpg" /></a>
                          <div
                            class="nd_options_bg_greydark_alpha nd_options_position_absolute nd_options_left_0 nd_options_height_100_percentage nd_options_width_100_percentage nd_options_padding_30 nd_options_box_sizing_border_box">
                          </div>
                          <a class="nd_options_position_absolute nd_options_right_20 nd_options_top_20 nd_options_display_inline_block nd_options_border_1_solid_white nd_options_color_white nd_options_first_font nd_options_padding_8 nd_options_border_radius_3 nd_options_font_size_13 nd_options_z_index_9 nd_options_text_transform_uppercase"
                            href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/course-registration/">News</a>
                        </div>



                      </div>

                      <div
                        class="nd_options_section nd_options_padding_30 nd_options_box_sizing_border_box">
                        <h5
                          class="nd_options_margin_0_important nd_options_padding_0 nd_options_second_font nd_options_color_grey">
                          June 4</h5>
                        <div class="nd_options_section nd_options_height_10"></div>
                        <h2 class="nd_options_margin_0_important nd_options_padding_0 ">Course
                                                    Registration</h2>
                        <div class="nd_options_section nd_options_height_20"></div>
                        <p class="nd_options_margin_0_important nd_options_padding_0">Lorem
                                                    ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <div class="nd_options_section nd_options_height_20"></div>
                        <a style={{ backgroundColor: '#174873' }}
                          class="nd_options_display_inline_block nd_options_line_height_16 nd_options_text_align_center nd_options_box_sizing_border_box  nd_options_color_white nd_options_first_font nd_options_padding_10_20 nd_options_border_radius_3 "
                          href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/course-registration/">READ
                                                    MORE</a>

                      </div>



                      <div
                        class="nd_options_section nd_options_padding_20_30 nd_options_box_sizing_border_box nd_options_border_top_1_solid_grey">

                        <div
                          class="nd_options_width_50_percentage nd_options_width_100_percentage_all_iphone nd_options_float_left">
                          <div class="nd_options_display_table nd_options_float_left">
                            <img alt=""
                              class="nd_options_margin_right_10 nd_options_display_table_cell nd_options_vertical_align_middle nd_options_border_radius_100_percentage"
                              width="25" height="25"
                              src="http://2.gravatar.com/avatar/240d164d512e70622cfed37027775e77?s=96&d=mm&r=g" />
                            <p
                              class="nd_options_display_table_cell nd_options_vertical_align_middle nd_options_font_size_15">
                              <a
                                href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/course-registration/">giulsi</a>
                            </p>
                          </div>
                        </div>

                        <div
                          class="nd_options_width_50_percentage nd_options_display_none_all_iphone nd_options_float_left">
                          <div class="nd_options_display_table nd_options_float_left">
                            <img alt=""
                              class="nd_options_margin_right_10 nd_options_display_table_cell nd_options_vertical_align_middle "
                              width="23" height="23"
                              src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/img/icons/icon-comment-grey.svg" />
                            <p
                              class="nd_options_display_table_cell nd_options_vertical_align_middle nd_options_font_size_15">
                              <a
                                href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/course-registration/">1
                                                                Comments</a></p>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>




                  <div
                    class=" nd_options_width_33_percentage nd_options_float_left nd_options_padding_15 nd_options_box_sizing_border_box nd_options_masonry_item nd_options_width_100_percentage_responsive">


                    <div class="nd_options_section nd_options_position_relative">




                      <div class="nd_options_section nd_options_position_relative">
                        <a
                          href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/our-library/"><img
                            alt="" class="nd_options_section"
                            src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/08/blog-vert-1.jpg" /></a>

                        <a style={{ backgroundColor: '#174873' }}
                          class="nd_options_position_absolute nd_options_right_20 nd_options_top_20 nd_options_display_inline_block nd_options_color_white nd_options_first_font nd_options_padding_8 nd_options_border_radius_3 nd_options_font_size_13 nd_options_z_index_9 nd_options_text_transform_uppercase"
                          href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/our-library/">News</a>


                        <div
                          class="nd_options_bg_greydark_alpha_gradient_3 nd_options_position_absolute nd_options_left_0 nd_options_height_100_percentage nd_options_width_100_percentage nd_options_padding_30 nd_options_box_sizing_border_box">
                          <div class="nd_options_position_absolute nd_options_bottom_30">
                            <h2 class="nd_options_color_white">
                              <a class="nd_options_color_white nd_options_first_font"
                                href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/our-library/">
                                Our Library
                                                            </a>
                            </h2>
                            <div class="nd_options_section nd_options_height_10"></div>
                            <div class="nd_options_display_table nd_options_float_left">
                              <img alt=""
                                class="nd_options_margin_right_10 nd_options_display_table_cell nd_options_vertical_align_middle"
                                width="20" height="20"
                                src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/img/icons/icon-calendar-white.svg" />
                              <p
                                class=" nd_options_color_white nd_options_display_table_cell nd_options_vertical_align_middle nd_options_font_size_13">
                                June 5</p>
                              <img alt=""
                                class="nd_options_margin_right_10 nd_options_margin_left_20 nd_options_display_table_cell nd_options_vertical_align_middle"
                                width="20" height="20"
                                src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/img/icons/icon-comment-white.svg" />
                              <p
                                class="nd_options_color_white nd_options_display_table_cell nd_options_vertical_align_middle nd_options_font_size_13">
                                1 Comments</p>
                            </div>

                          </div>

                        </div>


                      </div>



                    </div>


                  </div>




                  <div
                    class=" nd_options_width_33_percentage nd_options_float_left nd_options_padding_15 nd_options_box_sizing_border_box nd_options_masonry_item nd_options_width_100_percentage_responsive">

                    <div style={{ backgroundColor: '#174873' }}
                      class="nd_options_section nd_options_text_align_center nd_options_padding_50 nd_options_box_sizing_border_box">

                      <div class="nd_options_display_inline_block">
                        <img alt="" class="nd_options_margin_right_10" width="20" height="20"
                          src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/img/icons/icon-link-white.svg" />
                        <h2
                          class="nd_options_color_white nd_options_line_height_35 nd_options_display_inline_block">
                          <span class="nd_options_padding_botttom_5">
                            <a class="nd_options_color_white nd_options_first_font"
                              href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/2016/06/06/check-new-events/">
                              Check New Events
                                                        </a>
                          </span>
                        </h2>
                      </div>

                    </div>

                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>


        <div data-vc-full-width="true" data-vc-full-width-init="false"
          class="vc_row wpb_row vc_row-fluid vc_custom_1467280971567 vc_row-has-fill">
          <div class="wpb_column vc_column_container vc_col-sm-2">
            <div class="vc_column-inner vc_custom_1467271134818">
              <div class="wpb_wrapper">
                <div style={{ textAlign: 'center' }} class="nd_options_section">
                  <img alt="" style={{ width: '100%' }} class=" nd_options_margin_0 nd_options_padding_0 "
                    src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/06/food-logo1.png" />
                </div>
              </div>
            </div>
          </div>
          <div class="wpb_column vc_column_container vc_col-sm-2">
            <div class="vc_column-inner vc_custom_1467271143019">
              <div class="wpb_wrapper">
                <div style={{ textAlign: 'center' }} class="nd_options_section">
                  <img alt="" style={{ width: '100%' }} class=" nd_options_margin_0 nd_options_padding_0 "
                    src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/06/food-logo2.png" />
                </div>
              </div>
            </div>
          </div>
          <div class="wpb_column vc_column_container vc_col-sm-2">
            <div class="vc_column-inner vc_custom_1467271150084">
              <div class="wpb_wrapper">
                <div style={{ textAlign: 'center' }} class="nd_options_section">
                  <img alt="" style={{ width: '100%' }} class=" nd_options_margin_0 nd_options_padding_0 "
                    src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/06/food-logo3.png" />
                </div>
              </div>
            </div>
          </div>
          <div class="wpb_column vc_column_container vc_col-sm-2">
            <div class="vc_column-inner vc_custom_1467271159725">
              <div class="wpb_wrapper">
                <div style={{ textAlign: 'center' }} class="nd_options_section">
                  <img alt="" style={{ width: '100%' }} class=" nd_options_margin_0 nd_options_padding_0 "
                    src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/06/food-logo4.png" />
                </div>
              </div>
            </div>
          </div>
          <div class="wpb_column vc_column_container vc_col-sm-2">
            <div class="vc_column-inner vc_custom_1467271168220">
              <div class="wpb_wrapper">
                <div style={{ textAlign: 'center' }} class="nd_options_section">
                  <img alt="" style={{ width: '100%' }} class=" nd_options_margin_0 nd_options_padding_0 "
                    src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/06/food-logo5.png" />
                </div>
              </div>
            </div>
          </div>
          <div class="wpb_column vc_column_container vc_col-sm-2">
            <div class="vc_column-inner vc_custom_1467271192396">
              <div class="wpb_wrapper">
                <div style={{ textAlign: 'center' }} class="nd_options_section">
                  <img alt="" style={{ width: '100%' }} class=" nd_options_margin_0 nd_options_padding_0 "
                    src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/06/food-logo6.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* start footer */}

      <div id="nd_options_footer_2" style={{ backgroundColor: '#444444' }} class="nd_options_section">

        <div class="nd_options_section nd_options_height_50"></div>

        <div class="nd_options_container nd_options_clearfix">


          <div class="grid nd_options_grid_12 nd_options_text_align_center">

            <div class="nd_options_section">
              <a href="http://www.nicdarkthemes.com/themes/education/wp/demo/university"><img alt=""
                width="200" class=""
                src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/08/logo-university-white.png" /></a>
            </div>

            <div class="nd_options_section nd_options_height_20"></div>

            <div style={{ color: "#a3a3a3" }} class="nd_options_display_inline_block">

              <a target="_blank" href=""><img alt="" width="40" height="40" class="nd_options_margin_5"
                src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/addons/customizer/shortcodes/social/img/facebook.svg" /></a><a
                  target="_blank" href=""><img alt="" width="40" height="40" class="nd_options_margin_5"
                    src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/addons/customizer/shortcodes/social/img/twitter.svg" /></a><a
                      target="_blank" href=""><img alt="" width="40" height="40" class="nd_options_margin_5"
                        src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/addons/customizer/shortcodes/social/img/pinterest.svg" /></a><a
                          target="_blank" href=""><img alt="" width="40" height="40" class="nd_options_margin_5"
                            src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/addons/customizer/shortcodes/social/img/linkedin.svg" /></a><a
                              target="_blank" href=""><img alt="" width="40" height="40" class="nd_options_margin_5"
                                src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/addons/customizer/shortcodes/social/img/youtube.svg" /></a>
            </div>
          </div>
        </div>
        <div class="nd_options_section nd_options_height_50"></div>
      </div>
      <div style={{ backgroundColor: "#444444" }} class="nd_options_section">

        <div style={{ borderTop: "1px solid #595959" }} class="nd_options_container nd_options_clearfix">
          <div class="grid nd_options_grid_6 nd_options_text_align_center_responsive">
            <p class="nd_options_font_size_14" style={{ color: "#a3a3a3" }}>© Copyright 2016 CleanThemes.net -
            University Theme</p>
          </div>
          <div class="grid nd_options_grid_6 nd_options_text_align_right nd_options_text_align_center_responsive">
            <p class="nd_options_font_size_14" style={{ color: "#a3a3a3" }}>Wonderful Education WP Theme</p>
          </div>
        </div>

      </div>

    </div >);
}

export default Home;
